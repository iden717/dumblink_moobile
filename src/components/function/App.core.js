import { useState } from "react";
import { SIZES, COLORS } from "../../constants";

export function last(data, i) {
  return data.length === i + 1 ? true : false;
}

export function scrollNext(animated, index) {
  animated.current.scrollTo({ x: SIZES.width * (index + 1) });
}

export function onChangeText(name, text, form, setForm) {
  const formLast = { ...form };
  formLast[name] = text;

  setForm(formLast);
}

const core = {
  last,
  scrollNext,
  onChangeText,
};

export default core;
