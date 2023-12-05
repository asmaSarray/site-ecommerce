import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import { Link } from "react-router-dom";

import styled from "styled-components";
const SingleProductPage = () => {
  const { id } = useParams();

  console.log("ID from useParams:", id);
  const history = useHistory();
  console.log("ID from useHistory:", url);

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    if (id) {
      fetchSingleProduct(`${url}${id}`);
    }
  }, [id]);
  console.log(product);

  useEffect(() => {
    console.log(error);

    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="product-center">
        <Link to="/products" className="btn">
          BACK TO PRODUCTS
        </Link>
        <div className="products-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available:</span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU:</span>
              {sku}
            </p>
            <p className="info">
              <span>brand:</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 15px 0;
  }
  .btn {
    color: white;
    padding: 0.75rem 3.5rem;
    text-decoration: none;
    font-size: 1rem;
    max-width: 150px;
    max-height: 50px;
    background-color: rgb(179, 153, 170);
  }
  @media (min-width: 992px) {
    .product-center {
      display: grid;
      gap: 4rem;
      margin-top: 2rem;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
