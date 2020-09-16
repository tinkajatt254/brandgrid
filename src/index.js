// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
import Layout from "./App";
import Services from "./brandsgridDark/Services/Innerpages/Service";
import ServiceDetails from "./brandsgridDark/Services/Innerpages/ServiceDetails";
import PortfolioDetails from "./brandsgridDark/Portfolio/Innerpages/PortfolioDetails"
import BlogDetails from './brandsgridDark/Blog/Innerpages/BlogDetails';
import Blog from './brandsgridDark/Blog/Innerpages/Blog';
import error404 from "./error404";




import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';



class Root extends Component{
    render(){
        return(
            
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Layout}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/Service`} component={Services}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();