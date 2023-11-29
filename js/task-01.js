const categories = document.querySelectorAll('ul#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2')?.textContent ?? 'Untitled category';
    const items = category.querySelectorAll('ul > li');
    console.log(`Category: ${title}`);
    console.log(`Elements: ${items.length}`);
});