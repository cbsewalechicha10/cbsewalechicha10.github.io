function showMore() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        moreInfo.classList.add('fade-in');
    } else {
        moreInfo.classList.add('hidden');
    }
}
