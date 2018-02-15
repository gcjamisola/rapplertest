const rGetStories = () => {
    return fetch('https://svc.rappler.com/p/topstories')
    .then((response) => response.json())
};

export { rGetStories };