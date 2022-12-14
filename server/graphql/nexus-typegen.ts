/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  Role: { // root type
    id: number; // Int!
    role: string; // String!
  }
  School: { // root type
    id: number; // Int!
    name: string; // String!
  }
  Session: { // root type
    id: number; // Int!
    subject?: NexusGenRootTypes['Subject'] | null; // Subject
    timestamp: number; // Int!
  }
  Subject: { // root type
    id: number; // Int!
    name: string; // String!
  }
  User: { // root type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    password?: string | null; // String
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    addSession: NexusGenRootTypes['Session']; // Session!
    deleteSession: NexusGenRootTypes['Session']; // Session!
    login: NexusGenRootTypes['User']; // User!
    register: NexusGenRootTypes['User']; // User!
    schedule: NexusGenRootTypes['Session']; // Session!
  }
  Query: { // field return type
    schools: NexusGenRootTypes['School'][]; // [School!]!
    sessions: NexusGenRootTypes['Session'][]; // [Session!]!
    subjects: NexusGenRootTypes['Subject'][]; // [Subject!]!
  }
  Role: { // field return type
    id: number; // Int!
    role: string; // String!
  }
  School: { // field return type
    id: number; // Int!
    name: string; // String!
  }
  Session: { // field return type
    id: number; // Int!
    student: NexusGenRootTypes['User'] | null; // User
    subject: NexusGenRootTypes['Subject'] | null; // Subject
    timestamp: number; // Int!
    tutor: NexusGenRootTypes['User']; // User!
  }
  Subject: { // field return type
    id: number; // Int!
    name: string; // String!
  }
  User: { // field return type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    password: string | null; // String
    roles: NexusGenRootTypes['Role'][]; // [Role!]!
    school: NexusGenRootTypes['School']; // School!
    username: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    addSession: 'Session'
    deleteSession: 'Session'
    login: 'User'
    register: 'User'
    schedule: 'Session'
  }
  Query: { // field return type name
    schools: 'School'
    sessions: 'Session'
    subjects: 'Subject'
  }
  Role: { // field return type name
    id: 'Int'
    role: 'String'
  }
  School: { // field return type name
    id: 'Int'
    name: 'String'
  }
  Session: { // field return type name
    id: 'Int'
    student: 'User'
    subject: 'Subject'
    timestamp: 'Int'
    tutor: 'User'
  }
  Subject: { // field return type name
    id: 'Int'
    name: 'String'
  }
  User: { // field return type name
    email: 'String'
    firstName: 'String'
    lastName: 'String'
    password: 'String'
    roles: 'Role'
    school: 'School'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addSession: { // args
      subjectId: number; // Int!
      timestamp: number; // Int!
      tutorName: string; // String!
    }
    deleteSession: { // args
      sessionId: number; // Int!
    }
    login: { // args
      password: string; // String!
      username: string; // String!
    }
    register: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
      roleId: number; // Int!
      schoolId: number; // Int!
      username: string; // String!
    }
    schedule: { // args
      sessionId: number; // Int!
      student: string; // String!
      subject: string; // String!
    }
  }
  Query: {
    sessions: { // args
      tutorName: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}