import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';



export default function Home(): JSX.Element {
    return (
        <Layout>
            <div  className="container logo-container">
                <div>
                    <img src={require('../../static/markdown/0ec2082abc02139e3fc1ce9090862d33.png').default} className='logo'/>
                    <div className="logo-badges">
                        <a href="https://pkg.go.dev/github.com/gogf/gf/v2" target="_blank">
                            <img src="https://godoc.org/github.com/gogf/gf?status.svg" alt="Go Doc"/>
                        </a>
                        <a href="https://travis-ci.com/github/gogf/gf" target="_blank">
                            <img src="https://api.travis-ci.com/gogf/gf.svg?branch=master" alt="Build Status"/>
                        </a>
                        <a href="https://goreportcard.com/report/github.com/gogf/gf" target="_blank">
                            <img src="https://goreportcard.com/badge/github.com/gogf/gf" alt="Go Report"/>
                        </a>
                        <a href="https://codecov.io/gh/gogf/gf/branch/master" target="_blank">
                            <img src="https://codecov.io/gh/gogf/gf/branch/master/graph/badge.svg" alt="Code Coverage"/>
                        </a>
                        <a href="https://github.com/gogf/gf" target="_blank" >
                            <img src="https://img.shields.io/badge/production-ready-blue.svg" alt="Production Ready"/>
                        </a>
                        <a href="https://github.com/gogf/gf" target="_blank">
                            <img src="https://img.shields.io/github/license/gogf/gf.svg?style=flat" alt="License"/>
                        </a>
                    <br/>
                        <a href="https://github.com/gogf/gf/releases" target="_blank">
                            <img src="https://img.shields.io/github/v/release/gogf/gf" alt="Release"/>
                        </a>
                        <a href="https://github.com/gogf/gf/pulls" target="_blank">
                            <img src="https://img.shields.io/github/issues-pr/gogf/gf" alt="GitHub pull requests"/>
                        </a>
                        <a href="https://github.com/gogf/gf/pulls?q=is%3Apr+is%3Aclosed" target="_blank">
                            <img src="https://img.shields.io/github/issues-pr-closed/gogf/gf" alt="GitHub closed pull requests"/>
                        </a>
                        <a href="https://github.com/gogf/gf/issues" target="_blank">
                            <img src="https://img.shields.io/github/issues/gogf/gf" alt="GitHub issues"/>
                        </a>
                        <a href="https://github.com/gogf/gf/issues?q=is%3Aissue+is%3Aclosed" target="_blank">
                            <img src="https://img.shields.io/github/issues-closed/gogf/gf" alt="GitHub closed issues"/>
                        </a>
                        <img src="https://img.shields.io/github/stars/gogf/gf?style=flat" alt="Stars"/>
                        <img src="https://img.shields.io/github/forks/gogf/gf?style=flat" alt="Forks"/>
                    </div>
                </div>

                <div className="container" style={{
                    textAlign: 'left',
                }}>
                    <p>
                        <code>GoFrame</code> 是一款模块化、高性能、企业级的 <code>Go</code> 基础开发框架。
                        <code>GoFrame</code> 是一款通用性的基础开发框架，是 <code>Golang</code> 标准库的一个增强扩展级，
                        包含通用核心的基础开发组件，优点是实战化、模块化、文档全面、模块丰富、易用性高、通用性强、面向团队。
                        <code>GoFrame</code> 既可用于开发完整的工程化项目，由于框架基础采用模块化解耦设计，因此也可以作为工具库使用。
                    </p>
                    <p>
                        如果您想使用 <code>Golang</code> 开发一个业务型项目，无论是小型还是中大型项目，
                        <code>GoFrame</code> 是您的不二之选。如果您想开发一个 <code>Golang</code> 组件库，
                        <code>GoFrame</code> 提供开箱即用、丰富强大的基础组件库也能助您的工作事半功倍。
                        如果您是团队 <code>Leader</code>， <code>GoFrame</code> 丰富的资料文档、详尽的代码注释、
                        活跃的社区成员将会极大降低您的指导成本，支持团队快速接入、语言转型与能力提升。
                    </p>
                </div>
            </div>
        </Layout>
    );
}
