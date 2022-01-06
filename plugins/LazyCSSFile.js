export const LazyFile = (url, lazy) => {
    const links = document.querySelectorAll('link');
    let hasIt = false
    links.forEach(l => {
        if(l.href.includes(url)) {
            hasIt = true
        }
    })
    if (!hasIt) {
        const file = document.createElement('link');
        file.rel = 'stylesheet';
        file.href = `/scss/${url}.scss`
       //  document.head.appendChild(file)
    }

}