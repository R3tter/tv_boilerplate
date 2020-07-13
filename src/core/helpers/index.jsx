import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// !!! store тут нужен, без него не работает кеширование
// eslint-disable-next-line
import store from 'store/index';

// Example of routes root arr
/* export const routes = [
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
]; */

export const routesMapper = (routes, isAuth = false) =>
  // eslint-disable-next-line
  routes.map((route, i) => {
    const { pageCategory, path } = route;
    // eslint-disable-next-line
    switch (pageCategory) {
      case 'private':
        return !isAuth ? (
          <Redirect key={i} from={path} to="/signIn" />
        ) : (
          <Route key={i} {...route} component={route.component} />
        );
      case 'auth':
        return !isAuth ? (
          <Route key={i} {...route} component={route.component} />
        ) : (
          <Redirect key={i} from={path} to="/cabinet" />
        );
    }
  });

export const generateEventObj = (name, value) => ({
  target: {
    name,
    value
  }
});

export const setFocus = (navigationName, itemId) => {
  const selector = itemId !== undefined ? `${navigationName}-${itemId}` : navigationName;
  const element = document.querySelector(`[data-focus-id="navigation-${selector}"]`)?.children[0];
  element?.focus();
};

export const chunk = (arr, length) =>
  arr.reduce((a, b, index) => {
    const slicedArr = arr.slice(index * length, index * length + length);
    return slicedArr.length ? [...a, slicedArr] : a;
  }, []);
