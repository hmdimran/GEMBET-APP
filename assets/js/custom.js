const element = document.querySelector('.social-share');
new ensemble.SocialShare(element);

new ensemble.SocialShare(element,{
    // namespace
    ns: 'share',
    fx: true,
    // root element
    root: 'body',
    // default classname
    className: 'social-share',
    // link to share
    // defaults to location.href
    link: '',
    // page title to share
    // defaults to window.title
    title: '',
    // description to share
    description: '',
    // actions to display
    displays: null,
    // action intents
    intents: {
      'facebook': 0,
      'twitter': 0,
      'whatsapp': 1,
      'messenger': 1,
      'telegram': 1,
      'linkedin': 0,
      'send-email': 2,
      'copy-link': 3,
      'web-share': 4
    },
    // URI strings
    uriform: {
      'facebook': 'https://facebook.com/sharer.php?u=%url%',
      'twitter': 'https://twitter.com/share?url=%url%&text=%title%',
      'whatsapp': 'https://api.whatsapp.com/send?text=%text%',
      'messenger': 'fb-messenger://share/?link=%url%&app_id=%app_id%',
      'telegram': 'https://telegram.me/share/url?url=%url%&text=%text%',
      'linkedin': 'https://www.linkedin.com/sharing/share-offsite?mini=true&url=%url%&title=%title%&ro=false&summary=%summary%',
      'send-email': 'mailto:?subject=%subject%&body=%text%'
    },
    // selector to find link
    selectorLink: {
      element: 'link[rel="canonical"]',
      attribute: 'href'
    },
    // selector to find title
    selectorTitle: null,
    // selector to find description
    selectorDescription: {
      element: 'meta[name="description"]',
      attribute: 'content'
    },
    // Custom parameters for label
    label: {},
});