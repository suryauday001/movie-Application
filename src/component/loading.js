import React from 'react';
import ReactLoading from 'react-loading';

const ContentLoader = ({ type, color }) => (
	<ReactLoading type="bars" color="#FFF" className="loading-animation" />
);

export default ContentLoader;