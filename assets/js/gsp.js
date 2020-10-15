
document.addEventListener('DOMContentLoaded', () => {
    const svgElems = document.querySelectorAll('[data-fillColor]');
    const bgElems = document.querySelectorAll('[data-bgImage]');
    const scrollDragElems = document.querySelectorAll('[data-scrollOnDrag]');
    const btnSidebar = document.querySelector('#btn-sidebar');
    const marginElements = document.querySelectorAll(`[class*=m${marginPrefix}]`);

    /* toggle sidebar */
    const sidebar = document.querySelector('#sidebar');
    const sidebarNav = document.querySelector('#sidebar-nav');
    const content = document.querySelector('#content');
    const menuLinks = document.querySelectorAll('.menu-link > span');
    const subscriber = document.querySelectorAll('.subscriber');
    const subscriberImg = document.querySelectorAll('.subscriber-avatar > img');
    const subscriberDetails = document.querySelectorAll('.subscriber-details');
    const subscriberIsLive = document.querySelectorAll('.subscriber-is-live');

    setColor(svgElems, 'fill');
    setMargins(marginElements, marginPrefix);
    setBgImage(bgElems);
    scrollOnDragElems(scrollDragElems);

    btnSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('sb-collapsed');
        content.classList.toggle('sb-collapsed');
        sidebarNav.classList.toggle('sb-collapsed');
        btnSidebar.classList.toggle('sb-collapsed');

        menuLinks.forEach((ml) => {
            ml.classList.toggle('dp-none');
        });
        subscriberDetails.forEach((sd) => {
            sd.classList.toggle('dp-none');
        });
        subscriberIsLive.forEach((sil) => {
            sil.classList.toggle('dp-none');
        });
        subscriberImg.forEach((si) => {
            si.classList.toggle('sb-collapsed');
        });
        subscriber.forEach((s) => {
            s.classList.toggle('sb-collapsed');
        });
    });

});

function collapseSidebar() {
    const sidebar = document.querySelector('#sidebar');
    const btnSidebar = document.querySelector('#btn-sidebar');
    const sidebarNav = document.querySelector('#sidebar-nav');
    const content = document.querySelector('#content');
    const menuLinks = document.querySelectorAll('.menu-link > span');
    const subscriberImg = document.querySelectorAll('.subscriber-avatar > img');
    const subscriberDetails = document.querySelectorAll('.subscriber-details');
    const subscriberIsLive = document.querySelectorAll('.subscriber-is-live');

    sidebar.classList.toggle('sb-collapsed');
    content.classList.toggle('sb-collapsed');
    sidebarNav.classList.toggle('sb-collapsed');
    btnSidebar.classList.toggle('sb-collapsed');

    menuLinks.forEach((ml) => {
        ml.classList.toggle('dp-none');
    });
    subscriberDetails.forEach((sd) => {
        sd.classList.toggle('dp-none');
    });
    subscriberIsLive.forEach((sil) => {
        sil.classList.toggle('dp-none');
    });
    subscriberImg.forEach((si) => {
        si.classList.toggle('sb-collapsed');
    });
}
