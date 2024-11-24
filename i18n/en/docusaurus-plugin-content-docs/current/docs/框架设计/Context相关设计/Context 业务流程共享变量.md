---
slug: '/docs/design/context-variable'
title: 'Context: Business Process Shared Variables'
sidebar_position: 0
hide_title: true
keywords: [GoFrame, GoFrame Framework, Context, Context Variables, Shared Variables, Asynchronous IO, HTTP Requests, Session Management, User Information, Middleware]
description: "Pass and manage shared variables in the context flow using Context in the GoFrame framework. In Go network applications, especially HTTP/RPC services, Context is a key tool for passing asynchronous IO control and context variables. Through structured object sharing, this article demonstrates how to implement variable passing during the request process to ensure consistency and flexibility of variables in the request chain."
---

`Context` refers to the `context.Context` from the standard library, which is an interface object commonly used for **asynchronous `IO` control** and **transmitting context flow variables**. This article will introduce how to use `Context` to pass shared variables between processes.

In Go's execution flow, especially in the `HTTP/RPC` execution flow, there is no way to get request parameters using "global variables." Instead, context `Context` variables must be passed to subsequent process methods. This `Context` context variable includes all the shared variables that need to be passed and should be agreed upon in advance, often stored as object pointers.

Sharing variables through `Context` is quite simple. Below we will demonstrate how to pass and use general shared variables in a practical project example.

## I. Structure Definition

The context object often stores some variables that need to be shared, and these variables are usually stored using structured objects for easy maintenance. For example, we define shared variables within `model` in a context:

```go
const (
    // The key name for storing context variables, shared between the front and back-end systems
    ContextKey = "ContextKey"
)

// Request context structure
type Context struct {
    Session *ghttp.Session // Current Session management object
    User    *ContextUser   // Context user information
    Data    g.Map          // Custom KV variables that can be set by business modules as needed, not fixed
}

// User information within the request context
type ContextUser struct {
    Id       uint   // User ID
    Passport string // User account
    Nickname string // User name
    Avatar   string // User avatar
}
```

Among them:

1. The constant `model.ContextKey` represents the key name stored in the `context.Context` context variable, which is used to store/retrieve custom shared variables from the passed `context.Context` variable.
2. The `Session` in the `model.Context` structure represents the `Session` object of the current request. In the GoFrame framework, each `HTTP` request object has an empty `Session` object, designed with lazy initialization that only initializes when a read or write operation is executed.
3. The `User` in the `model.Context` structure represents basic information about the currently logged-in user, which is only populated after user login, otherwise, it is `nil`.
4. The `Data` attribute in the `model.Context` structure is used to store custom `KV` variables; thus, developers generally do not need to add custom key-value pairs to the `context.Context` variable but can directly use this `Data` attribute of the `model.Context` object. Detailed explanations follow.

## II. Logical Encapsulation

Since this context object is also related to business logic, we need to encapsulate the context variables through the `service` object for use by other modules.

```go
// Context management service
var Context = new(contextService)

type contextService struct{}

// Initialize the context object pointer into the context object for modification in subsequent request processes.
func (s *contextService) Init(r *ghttp.Request, customCtx *model.Context) {
    r.SetCtxVar(model.ContextKey, customCtx)
}

// Get context variables, returning nil if not set
func (s *contextService) Get(ctx context.Context) *model.Context {
    value := ctx.Value(model.ContextKey)
    if value == nil {
        return nil
    }
    if localCtx, ok := value.(*model.Context); ok {
        return localCtx
    }
    return nil
}

// Set context information into the context request, note it is a complete overwrite
func (s *contextService) SetUser(ctx context.Context, ctxUser *model.ContextUser) {
    s.Get(ctx).User = ctxUser
}
```

## III. Context Variable Injection

Context variables must be injected into the request process at the beginning to allow other methods to call them. In `HTTP` requests, we can use GoFrame's middleware to achieve this. In `GRPC` requests, interceptors can be used. In the `service` layer's `middleware` management object, we can define it as follows:

```go
// Custom context object
func (s *middlewareService) Ctx(r *ghttp.Request) {
    // Initialization, must execute first
    customCtx := &model.Context{
        Session: r.Session,
        Data:    make(g.Map),
    }
    service.Context.Init(r, customCtx)
    if userEntity := Session.GetUser(r.Context()); userEntity != nil {
        customCtx.User = &model.ContextUser{
            Id:       userEntity.Id,
            Passport: userEntity.Passport,
            Nickname: userEntity.Nickname,
            Avatar:   userEntity.Avatar,
        }
    }
    // Pass the custom context object to template variables for use
    r.Assigns(g.Map{
        "Context": customCtx,
    })
    // Execute the next request logic
    r.Middleware.Next()
}
```

This middleware initializes the shared object for the user execution process, and the object stored in the `context.Context` variable is a pointer type `*model.Context`. Therefore, accessing this pointer from anywhere allows you to obtain or directly modify the data inside.

If stored information about a logged-in user exists in `Session`, the basic user information that needs to be shared will also be written into `*model.Context`.

## IV. Usage of Context Variables

### Method Definition

Conventionally, the first input parameter of a method is often reserved for the `context.Context` type parameter to receive context variables, especially in methods of the `service` layer. For example:

```go
// Execute user login
func (s *userService) Login(ctx context.Context, loginReq *define.UserServiceLoginReq) error {
    ...
}

// Query content list
func (s *contentService) GetList(ctx context.Context, r *define.ContentServiceGetListReq) (*define.ContentServiceGetListRes, error) {
    ...
}

// Create reply content
func (s *replyService) Create(ctx context.Context, r *define.ReplyServiceCreateReq) error {
    ...
}
```

In addition, conventionally, the last return parameter of a method is often of type `error`. If you are certain that this method will never produce an `error`, you can ignore it.

### Obtaining `Context` Objects

Use the following method encapsulated in `service` to pass the `context.Context` context variable. In the GoFrame framework's `HTTP` request, you can get the `context.Context` context variable using the `r.Context()` method, while in `GRPC` requests, the first parameter for executing methods in the compiled generated `pb` file is fixed as `context.Context`.

```go
service.Context.Get(ctx)
```

### Custom Key-Value

Set/get custom key-value pairs using the following method:

```go
// Set custom key-value pairs
service.Context.Get(ctx).Data[key] = value

...

// Get custom key-value pairs
service.Context.Get(ctx).Data[key]
```

## V. Precautions

1. Only pass necessary link parameter data in context variables; don't indiscriminately stuff parameters into them. Especially for method parameter passing data, it should be explicitly passed as method parameters rather than being stuffed inside.
2. Context variables are for runtime temporary use only and should not be persistently stored for long-term use. For example, it is incorrect to serialize `ctx` and store it in a database for reading and deserialization in the next request.