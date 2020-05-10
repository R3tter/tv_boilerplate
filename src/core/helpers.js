import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// !!! store тут нужен, без него не работает кеширование (логин вообще не пашет). Почему? Хороший вопрос ) !!!
import store from 'store'; // eslint-disable-line

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
