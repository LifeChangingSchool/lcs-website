/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAppOct2020Input = {
  id?: string | null,
  submitted1: boolean,
  submitted2: boolean,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  channel?: string | null,
  referralCode?: string | null,
  essay1?: string | null,
  essay2?: string | null,
  essay3?: string | null,
  essay4?: string | null,
};

export type ModelAppOct2020ConditionInput = {
  submitted1?: ModelBooleanInput | null,
  submitted2?: ModelBooleanInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  channel?: ModelStringInput | null,
  referralCode?: ModelStringInput | null,
  essay1?: ModelStringInput | null,
  essay2?: ModelStringInput | null,
  essay3?: ModelStringInput | null,
  essay4?: ModelStringInput | null,
  and?: Array< ModelAppOct2020ConditionInput | null > | null,
  or?: Array< ModelAppOct2020ConditionInput | null > | null,
  not?: ModelAppOct2020ConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateAppOct2020Input = {
  id: string,
  submitted1?: boolean | null,
  submitted2?: boolean | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  channel?: string | null,
  referralCode?: string | null,
  essay1?: string | null,
  essay2?: string | null,
  essay3?: string | null,
  essay4?: string | null,
};

export type DeleteAppOct2020Input = {
  id?: string | null,
};

export type ModelAppOct2020FilterInput = {
  id?: ModelIDInput | null,
  submitted1?: ModelBooleanInput | null,
  submitted2?: ModelBooleanInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  channel?: ModelStringInput | null,
  referralCode?: ModelStringInput | null,
  essay1?: ModelStringInput | null,
  essay2?: ModelStringInput | null,
  essay3?: ModelStringInput | null,
  essay4?: ModelStringInput | null,
  and?: Array< ModelAppOct2020FilterInput | null > | null,
  or?: Array< ModelAppOct2020FilterInput | null > | null,
  not?: ModelAppOct2020FilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateAppOct2020MutationVariables = {
  input: CreateAppOct2020Input,
  condition?: ModelAppOct2020ConditionInput | null,
};

export type CreateAppOct2020Mutation = {
  createAppOct2020:  {
    __typename: "AppOct2020",
    id: string,
    submitted1: boolean,
    submitted2: boolean,
    firstName: string | null,
    lastName: string | null,
    phoneNumber: string | null,
    channel: string | null,
    referralCode: string | null,
    essay1: string | null,
    essay2: string | null,
    essay3: string | null,
    essay4: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateAppOct2020MutationVariables = {
  input: UpdateAppOct2020Input,
  condition?: ModelAppOct2020ConditionInput | null,
};

export type UpdateAppOct2020Mutation = {
  updateAppOct2020:  {
    __typename: "AppOct2020",
    id: string,
    submitted1: boolean,
    submitted2: boolean,
    firstName: string | null,
    lastName: string | null,
    phoneNumber: string | null,
    channel: string | null,
    referralCode: string | null,
    essay1: string | null,
    essay2: string | null,
    essay3: string | null,
    essay4: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteAppOct2020MutationVariables = {
  input: DeleteAppOct2020Input,
  condition?: ModelAppOct2020ConditionInput | null,
};

export type DeleteAppOct2020Mutation = {
  deleteAppOct2020:  {
    __typename: "AppOct2020",
    id: string,
    submitted1: boolean,
    submitted2: boolean,
    firstName: string | null,
    lastName: string | null,
    phoneNumber: string | null,
    channel: string | null,
    referralCode: string | null,
    essay1: string | null,
    essay2: string | null,
    essay3: string | null,
    essay4: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetAppOct2020QueryVariables = {
  id: string,
};

export type GetAppOct2020Query = {
  getAppOct2020:  {
    __typename: "AppOct2020",
    id: string,
    submitted1: boolean,
    submitted2: boolean,
    firstName: string | null,
    lastName: string | null,
    phoneNumber: string | null,
    channel: string | null,
    referralCode: string | null,
    essay1: string | null,
    essay2: string | null,
    essay3: string | null,
    essay4: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListAppOct2020sQueryVariables = {
  filter?: ModelAppOct2020FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAppOct2020sQuery = {
  listAppOct2020s:  {
    __typename: "ModelAppOct2020Connection",
    items:  Array< {
      __typename: "AppOct2020",
      id: string,
      submitted1: boolean,
      submitted2: boolean,
      firstName: string | null,
      lastName: string | null,
      phoneNumber: string | null,
      channel: string | null,
      referralCode: string | null,
      essay1: string | null,
      essay2: string | null,
      essay3: string | null,
      essay4: string | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateAppOct2020SubscriptionVariables = {
  owner: string,
};

export type OnCreateAppOct2020Subscription = {
  onCreateAppOct2020:  {
    __typename: "AppOct2020",
    id: string,
    submitted1: boolean,
    submitted2: boolean,
    firstName: string | null,
    lastName: string | null,
    phoneNumber: string | null,
    channel: string | null,
    referralCode: string | null,
    essay1: string | null,
    essay2: string | null,
    essay3: string | null,
    essay4: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateAppOct2020SubscriptionVariables = {
  owner: string,
};

export type OnUpdateAppOct2020Subscription = {
  onUpdateAppOct2020:  {
    __typename: "AppOct2020",
    id: string,
    submitted1: boolean,
    submitted2: boolean,
    firstName: string | null,
    lastName: string | null,
    phoneNumber: string | null,
    channel: string | null,
    referralCode: string | null,
    essay1: string | null,
    essay2: string | null,
    essay3: string | null,
    essay4: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteAppOct2020SubscriptionVariables = {
  owner: string,
};

export type OnDeleteAppOct2020Subscription = {
  onDeleteAppOct2020:  {
    __typename: "AppOct2020",
    id: string,
    submitted1: boolean,
    submitted2: boolean,
    firstName: string | null,
    lastName: string | null,
    phoneNumber: string | null,
    channel: string | null,
    referralCode: string | null,
    essay1: string | null,
    essay2: string | null,
    essay3: string | null,
    essay4: string | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
