"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResult = exports.SearchParams = exports.SearchProps = void 0;
class SearchProps {
}
exports.SearchProps = SearchProps;
class SearchParams {
    constructor(props = {}) {
        this._per_page = 15;
        this.page = props.page || 1;
        this.per_page = props.per_page || 15;
        this.sort = props.sort || null;
        this.sort_dir = props.sort_dir || null;
        this.filter = props.filter || null;
    }
    get page() {
        return this._page;
    }
    get per_page() {
        return this._per_page;
    }
    get sort() {
        return this._sort;
    }
    get sort_dir() {
        return this._sort_dir;
    }
    get filter() {
        return this._filter;
    }
    set page(value) {
        let _page = Number(value);
        if (Number.isNaN(_page) || _page <= 0 || parseInt(_page) !== _page) {
            _page = 1;
        }
        this._page = _page;
    }
    set per_page(value) {
        let _per_page = value === true ? this._per_page : Number(value);
        if (Number.isNaN(_per_page) || _per_page <= 0 || parseInt(_per_page) !== _per_page) {
            _per_page = 15;
        }
        this._per_page = _per_page;
    }
    set sort(value) {
        let _sort = String(value);
        if (value === null || value === undefined || value === '') {
            _sort = null;
        }
        this._sort = _sort;
    }
    set sort_dir(value) {
        if (!this.sort) {
            this._sort_dir = null;
            return;
        }
        const dir = `${value}`.toLowerCase();
        this._sort_dir = dir !== 'asc' && dir !== 'desc' ? 'asc' : dir;
    }
    set filter(value) {
        let _filter = String(value);
        if (value === null || value === undefined || value === '') {
            _filter = null;
        }
        this._filter = _filter;
    }
}
exports.SearchParams = SearchParams;
class SearchResult {
    constructor(props) {
        this.items = props.items;
        this.total = props.total;
        this.current_page = props.current_page;
        this.per_page = props.per_page;
        this.last_page = Math.ceil(this.total / this.per_page);
        this.sort = props.sort;
        this.sort_dir = props.sort_dir;
        this.filter = props.filter;
    }
    toJSON() {
        return {
            items: this.items,
            total: this.total,
            current_page: this.current_page,
            per_page: this.per_page,
            last_page: this.last_page,
            sort: this.sort,
            sort_dir: this.sort_dir,
            filter: this.filter
        };
    }
}
exports.SearchResult = SearchResult;
