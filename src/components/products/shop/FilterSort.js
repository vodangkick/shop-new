import React, { Component } from 'react';
import withContainerProduct from '../../../contexts/ProductProvider';
import WidgetFilter from './WidgetFilter';
import TitleFilter from './TitleFilter';
import WidgetInner from './WidgetInner';

class FilterSort extends Component {

    render() {
        const value = this.props.context;
        const { category, color, brand } = value;
        return (
            <div className="col-lg-3">
                <div className="left_sidebar_area">
                    <WidgetFilter items={category} value={value} type="category" />
                    <aside className="left_widgets p_filter_widgets">
                        <TitleFilter title="Product Filters" />
                        <WidgetInner items={brand} value={value} title="Brand" type="brand" />
                        <WidgetInner items={color} value={value} title="Color" type="color" />
                    </aside>
                </div>
            </div>
        )
    }
}

export default withContainerProduct(FilterSort);