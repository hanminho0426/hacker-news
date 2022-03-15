import Router from "./core/router";
import { NewsFeedView, NewsDetailView } from "./page";
import { Store } from "./types";

const store: Store = {
  currentPage: 1,
  feeds: [],
};

declare golbal {
  interface Window {
    store: Store;
  }
} 

window.store = store;

const router: Router = new Router();
const newsFeedView = new NewsFeedView('root');
const newsDetailWiew = new NewsDetailView('root');

router.setDefaultPage(newsFeedView);

router.addRoutePath('/page/', newsFeedView);
router.addRoutePath('/show/', newsDetailWiew);

router.route();

