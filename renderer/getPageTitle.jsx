export { getPageTitle }

function getPageTitle(pageContext) {
    const title = (pageContext.exports.documentProps || {}).title || (pageContext.documentProps || {}).title || 'Demo'
    return title
}