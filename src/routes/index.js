import React from 'react';
import { Switch , Route} from 'react-router-dom';
import Create from './create/Create';
import Home from './home/Home';
import Like from './like/Like';
import Login from './login/Login';
import Praduct from './praduct/Praduct';
import PraductCategory from './praductCategory/PraductCategory';
import SearchResult from './search-results/SearchResult';
import Basket from "./basket/Basket";
import Select from './select/Select';
const Index = () => {
    return (
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/praductcategory/:categoryId">
          <PraductCategory/>
        </Route>
        <Route path="/praduct/:praductId">
           <Praduct/>
        </Route>
        <Route path="/searchresult/:praductName">
          <SearchResult/>
        </Route>
        <Route path="/select/:selectCategory">
         <Select/>
        </Route>
        <Route path="/like">
          <Like/>
        </Route>
        <Route path="/basket">
          <Basket/>
        </Route>
      </Switch>
    );
}

export default Index;
