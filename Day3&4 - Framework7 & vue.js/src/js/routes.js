import Home from '../pages/myPages/home.vue';
import TextFields from '../pages/myPages/textFields.vue';
import Lists from '../pages/myPages/lists.vue';
import SmartSelect from '../pages/myPages/smartSelect.vue';
import Navbar from '../pages/myPages/navbar.vue';
import Buttons from '../pages/myPages/buttons.vue';
import Checkbox from '../pages/myPages/checkbox.vue';
import Popup from '../pages/myPages/popup.vue';

var routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/navbar',
    component: Navbar,
  },
  {
    path: '/textFields',
    component: TextFields,
  },
  {
    path: '/lists',
    component: Lists,
  },
  {
    path: '/smartSelect',
    component: SmartSelect,
  },
  {
    path: '/checkbox',
    component: Checkbox,
  },
  {
    path: '/popup',
    component: Popup,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
];

export default routes;
