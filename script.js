function opentab(tabname) {
  let tablinks = document.getElementsByClassName("tab-links");
  let tabcontents = document.getElementsByClassName("tab-contents");

  for (let link of tablinks) {
    link.classList.remove("active-link");
  }
  for (let content of tabcontents) {
    content.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  let activeTab = document.getElementById(tabname);
  activeTab.classList.add("active-tab");

  // retrigger stagger animation for li elements
  let items = activeTab.querySelectorAll("ul li");
  items.forEach((item, index) => {
    item.style.animation = "none";
    item.offsetHeight; // reflow
    item.style.animation = `fadeUp 0.6s ease forwards ${index * 0.1}s`;
  });
}
