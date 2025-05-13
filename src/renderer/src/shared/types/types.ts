export interface IProduct {
  id: number;
  name: string;
  price: number;
  description?: string;
  weight?: number;
  unitType?: string;
}

export interface IProductContainer {
  id: number;
  idGroup: number | null;
  product: IProduct;
}

export interface ICategory {
  id: number;
  idParent: number | null;
  name: string;
  logo?: string;
}

export interface ICategoryListModuleState {
  groups: ICategory[];
  searchValue: string;
}

export interface IProductListModuleState {
  items: IProductContainer[];
  searchValue: string;
}

export interface IRoutes {
  CATALOG: string;
  CATALOG_ID: string;
  PRODUCT: string;
  PRODUCT_ID: string;
}