import './Dashboard.scss';

export const Dashboard = ({
                              metrics = defaultMetrics,
                              chartData = defaultChartData,
                              title = "Эффективность бизнеса с ИИ",
                              subtitle = "Сравнение ключевых показателей до и после внедрения ИИ-автоматизации"
                          }) => {
    return (
        <section className="dashboard">
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h2 className="dashboard-title">{title}</h2>
                    <p className="dashboard-subtitle">{subtitle}</p>
                </div>

                <div className="metrics-grid">
                    {metrics.map(metric => (
                        <div key={metric.id} className="metric-card">
                            <div className="metric-header">
                                <div className="metric-icon">{metric.icon}</div>
                                <span className={`metric-change ${metric.change >= 0 ? 'positive' : 'negative'}`}>
                                    {metric.change >= 0 ? '↑' : '↓'} {Math.abs(metric.change)}%
                                </span>
                            </div>
                            <h3 className="metric-value">{metric.value}</h3>
                            <p className="metric-title">{metric.title}</p>
                            <p className="metric-description">{metric.description}</p>
                        </div>
                    ))}
                </div>

                <div className="chart-section">
                    <h3 className="chart-title">Динамика бизнес-процессов наших клиентов</h3>
                    <p className="chart-subtitle">
                        Сравнение показателей эффективности до и после внедрения ИИ-решений AIMARKET
                    </p>

                    <div className="chart-wrapper">
                        <div className="chart-container">
                            <div className="chart-y-axis">
                                <span>0</span>
                                <span>5</span>
                                <span>10</span>
                                <span>15</span>
                                <span>20</span>
                            </div>

                            <div className="chart-content">
                                {chartData.map((item, index) => (
                                    <div key={index} className="chart-bar-container">
                                        <div
                                            className={`chart-bar ${item.period}`}
                                            style={{ height: `${(item.projects / 25) * 100}%` }}
                                            title={`${item.month}: ${item.projects} проектов`}
                                        >
                                            <span className="bar-value">{item.projects}</span>
                                        </div>
                                        <span className="bar-label">{item.month}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="chart-legend">
                        <div className="legend-item">
                            <div className="legend-color before"></div>
                            <span>До внедрения ИИ</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color after"></div>
                            <span>После внедрения ИИ</span>
                        </div>
                    </div>
                </div>

                <div className="info-blocks">
                    <div className="info-block">
                        <h4>Внедрение ИИ-автоматизации</h4>
                        <p>
                            Ежемесячно мы внедряем ИИ-решения для автоматизации бизнес-процессов и анализа данных, что позволяет значительно повысить эффективность работы компаний и сократить затраты времени.
                        </p>
                    </div>

                    <div className="info-block">
                        <h4>Ключевые улучшения после внедрения ИИ</h4>
                        <ul>
                            <li>Сокращение времени обработки заявок на 65%</li>
                            <li>Увеличение точности прогнозирования на 40%</li>
                            <li>Автоматизация рутинных бизнес-задач</li>
                            <li>Улучшение клиентского опыта и обслуживания</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const defaultMetrics = [
    {
        id: 1,
        title: "Количество продаж клиентов",
        value: "154",
        change: 42,
        description: "За последний квартал после внедрения ИИ",
        icon: "📈"
    },
    {
        id: 2,
        title: "Скорость отклика",
        value: "2.4ч",
        change: 65,
        description: "Среднее время ответа на заявки клиентов",
        icon: "⏱️"
    },
    {
        id: 3,
        title: "Удовлетворенность клиентов",
        value: "94%",
        change: 28,
        description: "По отзывам клиентов после автоматизации",
        icon: "⭐"
    },
    {
        id: 4,
        title: "Новых лидов у клиентов",
        value: "87",
        change: 53,
        description: "За текущий месяц после внедрения ИИ решений",
        icon: "👥"
    }
];

const defaultChartData = [
    { month: "Янв", projects: 3, period: "before" },
    { month: "Фев", projects: 5, period: "before" },
    { month: "Мар", projects: 2, period: "before" },
    { month: "Апр", projects: 10, period: "after" },
    { month: "Май", projects: 9, period: "after" },
    { month: "Июн", projects: 15, period: "after" },
    { month: "Июл", projects: 12, period: "after" },
    { month: "Авг", projects: 18, period: "after" }
];

export default Dashboard;
