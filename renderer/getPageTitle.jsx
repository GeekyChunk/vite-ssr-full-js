export { getPageTitle }

function getPageTitle(pageContext) {
    try {
        const title = (pageContext.exports.documentProps || {}).title ||
            (pageContext.documentProps || {}).title || 'Demo'
        return title

    } catch {
        const title = "Demo"
        return title
    }
}
