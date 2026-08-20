import "../styles/index.css"

interface CategoryLayoutProps {
    title: string;
    filters: React.ReactNode;
    children: React.ReactNode;
}

function CategoryLayout({
    title,
    filters,
    children,
}: CategoryLayoutProps) {
    return (
        <main className="category-page">

            <h2 className="category-title">{title}</h2>

            <div className="category-layout">

                <aside className="filters">
                    {filters}
                </aside>

                <section className="category-products">
                    {children}
                </section>

            </div>

        </main>
    );
}

export default CategoryLayout;