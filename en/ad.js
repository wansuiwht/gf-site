// 定义添加自定义内容的函数
function addCustomContent() {
    // 检查是否是英文路径
    if (window.location.pathname.startsWith('/en/')) {
        return; // 如果是英文路径，不显示广告
    }

    // 检查本地存储中是否已关闭广告
    if (localStorage.getItem('adClosed')) {
        return;
    }

    // 如果已经存在自定义内容，直接返回
    if (document.querySelector('.ad-content')) {
        return;
    }

    let tocElement = document.querySelector('div.theme-doc-toc-desktop');
    const mainContainer = document.querySelector('main .container .row');

    // 如果不存在 toc 元素且存在主容器，则创建新的右侧栏
    if (!tocElement && mainContainer) {
        // 检查是否已经创建了自定义右侧栏
        tocElement = mainContainer.querySelector('.custom-right-sidebar');
        if (!tocElement) {
            // 创建新的右侧栏 div
            tocElement = document.createElement('div');
            tocElement.className = 'col col--3 custom-right-sidebar';
            // 将新创建的 div 添加到主容器中
            mainContainer.appendChild(tocElement);
        }
    }

    // 如果找到或创建了 tocElement，且还没有添加自定义内容
    if (tocElement && !tocElement.querySelector('.ad-content')) {
        // 创建新的自定义 div
        const customDiv = document.createElement('div');
        customDiv.className = 'ad-content';
        customDiv.innerHTML = `
            <button class="ad-close" title="关闭">×</button>
            <a href="https://www.marscode.cn/?utm_source=advertising&utm_medium=prompt.cn_ug_cpa&utm_term=hw_marscode_cocotoolset&utm_content=home" target="_blank">
                <img src="/img/ad/marscode.png" alt="marscode">
                <span class="ad-tag">广告</span>
            </a>
        `;
        
        // 将自定义 div 添加到 tocElement 的末尾
        tocElement.appendChild(customDiv);

        // 添加关闭按钮的点击事件
        const closeButton = customDiv.querySelector('.ad-close');
        if (closeButton) {
            closeButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                localStorage.setItem('adClosed', 'true');
                customDiv.remove();
            });
        }
    }
}

// 使用防抖函数来限制执行频率
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 创建防抖版本的添加函数
const debouncedAddContent = debounce(addCustomContent, 100);

// 监听 DOM 变化
const observer = new MutationObserver((mutations) => {
    // 检查是否是我们自己的变更
    if (mutations.some(mutation => 
        mutation.target.classList.contains('ad-content') ||
        mutation.target.classList.contains('custom-right-sidebar'))) {
        return;
    }
    debouncedAddContent();
});

// 开始观察文档变化，但排除我们自己添加的元素
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});

// 监听路由变化
window.addEventListener('popstate', () => {
    // 给一个小延时，等待 DOM 更新
    setTimeout(addCustomContent, 200);
});

// 监听点击事件，因为 Docusaurus 的链接点击不会触发 popstate
document.addEventListener('click', (e) => {
    // 检查是否点击了链接
    const link = e.target.closest('a');
    if (link && link.href && link.href.startsWith(window.location.origin)) {
        // 给一个小延时，等待 DOM 更新
        setTimeout(addCustomContent, 200);
    }
});

// 初始加载时执行一次
setTimeout(addCustomContent, 200);