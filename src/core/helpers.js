import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// !!! store тут нужен, без него не работает кеширование
import store from 'store'; // eslint-disable-line

// Example of routes root arr
/*export const routes = [
  {
    path: '/auth',
    component: Auth,
    exact: false,
    pageCategory: 'auth'
  },
  {
    path: '/cabinet',
    component: Cabinet,
    exact: false,
    pageCategory: 'private'
  }
];*/

export const routesMapper = (routes, isAuth = false) =>
  routes.map((route, i) => {
    const { pageCategory, path } = route;

    switch (pageCategory) {
      case 'private':
        return !isAuth ? <Route key={i} path={path} render={() => <Redirect to="/auth" />} /> : <Route key={i} {...route} component={route.component} />;
      case 'auth':
        return !isAuth ? (
          <Route key={i} {...route} component={route.component} />
        ) : (
          <Route
            key={i}
            path={path}
            render={() => <Redirect to="/cabinet" />}
          />
        );
    }
  });

export const generateEventObj = (name, value) => ({
  target: {
    name,
    value
  }
});

