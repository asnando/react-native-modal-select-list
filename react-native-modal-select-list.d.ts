declare module "react-native-modal-select-list" {
  import { StyleProp, View, TextInputProps } from "react-native";
  import { Component, ReactNode } from "react";

  export interface ModalSelectListOption {
    label: string;
    value: string;
  }

  export interface ModalSelectListProps {
    buttonTextColor?: string;
    closeButtonText?: string;
    closeButtonComponent?: React.ReactNode;
    disableTextSearch?: boolean;
    filter?: () => any;
    headerTintColor?: string;
    inputName?: string;
    onSelectedOption?: (value: string) => void;
    options: ModalSelectListOption[];
    pageSize?: number;
    placeholder?: string;
    provider?: () => void | Promise<ModalSelectListOption[]>;
    numberOfLines?: number;
  }

  export class ModalSelectList extends Component<ModalSelectListProps> {
    show: void;
  }
}
