import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../routes/Home/Home';
import Features from '../../routes/Features/Features';
import Pricing from '../../routes/Pricing/Pricing';
import PageNotFound from '../../routes/PageNotFound/PageNotFound';

const Main = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/features' element={<Features />} />
			<Route path='/pricing' element={<Pricing />} />
            <Route path='*' element={<PageNotFound />} />
		</Routes>
	);
};

export default Main;
