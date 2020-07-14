import React from 'react';
import TitleFilter from './TitleFilter';
import WidgetInner from './WidgetInner';

export default function WidgetFilter({ items, value }) {
    return (
        <aside className="left_widgets cat_widgets">
            <TitleFilter title="BROWSE CATEGORIES" />
            <WidgetInner items={items} value={value} type="category" />
        </aside>
    )
}
