import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

type ErrorType = "minLength" | "maxLength";

type Props = {
  // 1 Uso de propiedades opcionales y obligatorias
  initialValue: string | number;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

// 2. Uso de type guards
const getInitialValue = (value: string | number): string => {
  if (typeof value === "number") {
    return value.toString();
  }
  return value;
};

// 3. Implementar manejo de errores
// Adding Type-Safe Error Handling
const getErrorMessage = (value: string, error: ErrorType): string => {
  switch (error) {
    case "minLength":
      return `The value ${value} is too short`;
    case "maxLength":
      return `The value ${value} is too long`;
  }
};

const InputField = ({ initialValue, onChange, disabled }: Props) => {
  const [value, setValue] = useState<string>(getInitialValue(initialValue));
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (value: string) => {
    if (value.length < 5) {
      setErrorMessage(getErrorMessage(value, "maxLength"));
    } else {
    }

    onChange?.(value);
    setValue(value);
  };

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={handleChange}
        editable={!disabled}
      />
      <Text>{errorMessage}</Text>
    </View>
  );
};
