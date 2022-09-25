import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";

import { FiSearch } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "../api";
import { CoinSearch } from "../interface";
import CoinItem from "../components/CoinItem";

interface SearchForm {
  keyword: string;
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.mp.xxxl};
`;

const Input = styled.input`
  padding: ${(props) => props.theme.mp.sm};
  border: 2px solid ${(props) => props.theme.color.textColor.xs};
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-right: ${(props) => props.theme.mp.sm};
  width: 50%;
  &:focus {
    border-color: ${(props) => props.theme.color.activeColor.xs};
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.color.activeColor.sm};
  padding: ${(props) => props.theme.mp.sm};
  border-radius: ${(props) => props.theme.borderRadius.md};
  color: white;
  transition: ${(props) => props.theme.transition.lg};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.activeColor.md};
  }
`;

const Search = () => {
  const { register, handleSubmit, reset } = useForm<SearchForm>();
  const [keyword, setKeyword] = useState("");
  const { data, isLoading } = useQuery<CoinSearch>(
    ["search", keyword],
    () => fetchSearch(keyword),
    {
      enabled: !!keyword,
      staleTime: 50000,
    }
  );

  const onValid = (fromData: SearchForm) => {
    console.log(fromData);
    setKeyword(fromData.keyword);
    reset();
  };

  return (
    <MainLayout title="Search">
      <Form onSubmit={handleSubmit(onValid)} action="">
        <Input
          {...register("keyword", { required: true })}
          type="text"
          placeholder="Keyword..."
        />
        <Button>
          <FiSearch />
        </Button>
      </Form>
      {data?.currencies.map((item) =>
        isLoading ? (
          "Loading..."
        ) : (
          <CoinItem
            key={item.id}
            name={item.name}
            symbol={item.symbol}
            rank={item.rank}
            id={item.id}
          />
        )
      )}
    </MainLayout>
  );
};

export default Search;
