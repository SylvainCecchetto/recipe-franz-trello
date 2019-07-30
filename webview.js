module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const notifications = document.querySelector('[data-test-id="header-notifications-button"]').getAttribute('class').split(' ');
    Franz.setBadge(0, notifications.length - 1);
  };

  Franz.loop(getMessages);
};