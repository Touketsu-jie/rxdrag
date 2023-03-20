import { Field } from "@rxdrag/react-antd-components";
import { IComponentMaterial } from "@rxdrag/react-core";
import { FieldDesigner } from "./designer";
import { fieldLocales } from "./locales";
import { fieldSchema } from "./schema";

const name = "Field"
export const FieldMaterial: IComponentMaterial = {
  componentName: name,
  component: Field,
  designer: FieldDesigner,
  designerLocales: fieldLocales,
  designerSchema: fieldSchema,
  behaviorRule: {
    droppable: false,
    noPlaceholder: true,
    noRef: true,
    lockable: true,
  },
}

