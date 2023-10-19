import { useState } from 'react';
import './App.css';
import { ArticleList, ButtonList } from './components';
import data from './data/data';

function App() {
	const allCategories = [
		'Todo',
		...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'Todo'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

	return (
		<>
			<div className='title'>
				<h1>
				mi<span>Alqui</span>
				</h1>
				{/* Insertar logo */}
				{/* <img src='src/img/hogar.png'/> */}
			</div>

			<ButtonList categories={categories} filterCategory={filterCategory}/>

			<ArticleList articles={articles}/>
		</>
	);
}

export default App;
