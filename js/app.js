// Загрузка тестов на главной странице
function loadTests() {
    const testsGrid = document.getElementById('testsGrid');
    if (!testsGrid) return;

    testsGrid.innerHTML = '';

    // Группируем тесты по категориям
    const testsByCategory = {};
    tests.forEach(test => {
        if (!testsByCategory[test.category]) {
            testsByCategory[test.category] = [];
        }
        testsByCategory[test.category].push(test);
    });

    // Создаем секции для каждой категории
    Object.keys(testsByCategory).forEach(category => {
        // Создаем заголовок категории
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        
        categorySection.innerHTML = `
            <h2 class="category-title">${category}</h2>
            <div class="category-grid" id="category-${category.replace(/\s+/g, '-').toLowerCase()}">
                <!-- Тесты категории будут добавлены сюда -->
            </div>
        `;
        
        testsGrid.appendChild(categorySection);
        
        // Находим контейнер для этой категории
        const categoryGrid = categorySection.querySelector(`#category-${category.replace(/\s+/g, '-').toLowerCase()}`);
        
        // Добавляем тесты категории
        testsByCategory[category].forEach(test => {
            const testCard = document.createElement('div');
            testCard.className = 'card';
            
            testCard.innerHTML = `
                <div class="card-header">
                    <h2 class="card-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                        ${test.title}
                    </h2>
                    <p class="card-description">${test.description}</p>
                </div>
                <div class="card-content">
                    <div class="card-info">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <span>${test.questions.length} вопросов</span>
                    </div>
                    <div class="card-info">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>${test.timeLimit} минут</span>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="test.html?id=${test.id}" class="btn btn-primary">Начать тест</a>
                </div>
            `;
            
            categoryGrid.appendChild(testCard);
        });
    });
}