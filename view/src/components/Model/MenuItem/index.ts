interface MenuItemProperty {
    title:string,
    href:string
}

class MenuItem implements MenuItemProperty{
    private _title:string = '';
    private _href:string = '';

    constructor(props : MenuItemProperty) {
        this.title = props.title;
        this.href = props.href;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get href(): string {
        return this._href;
    }

    set href(value: string) {
        this._href = value;
    }
}

export default MenuItem;
