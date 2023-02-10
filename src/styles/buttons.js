import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.pink
      ? `var(--color-primary)`
      : props.negative
      ? `var(--color-primary-negative)`
      : props.gray
      ? `var(--color-gray-1)`
      : ``};
  border: 1px solid
    ${(props) =>
      props.pink
        ? `var(--color-primary)`
        : props.negative
        ? `var(--color-primary-negative)`
        : props.gray
        ? `var(--color-gray-1)`
        : ``};
  color: var(--color-gray-0);
  font-size: var(--font-size-title);
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: ${(props) =>
      props.pink
        ? `var(--color-primary-focus)`
        : props.gray
        ? `var(--color-gray-2)`
        : ``};
    border-color: ${(props) =>
      props.pink
        ? `var(--color-primary-focus)`
        : props.gray
        ? `var(--color-gray-2)`
        : ``};

    ${(props) => (props.negative ? `filter: brightness(1.1)` : "")}
  }
`;
export const ButtonLink = styled(Link)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  background-color: ${(props) =>
    props.pink
      ? `var(--color-primary)`
      : props.negative
      ? `var(--color-primary-negative)`
      : props.gray
      ? `var(--color-gray-1)`
      : ``};
  border: 1px solid
    ${(props) =>
      props.pink
        ? `var(--color-primary)`
        : props.negative
        ? `var(--color-primary-negative)`
        : props.gray
        ? `var(--color-gray-1)`
        : ``};
  color: var(--color-gray-0);
  font-size: var(--font-size-title);
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: ${(props) =>
      props.pink
        ? `var(--color-primary-focus)`
        : props.gray
        ? `var(--color-gray-2)`
        : ``};
    border-color: ${(props) =>
      props.pink
        ? `var(--color-primary-focus)`
        : props.gray
        ? `var(--color-gray-2)`
        : ``};

    ${(props) => (props.negative ? `filter: brightness(1.1)` : "")}
  }
`;
