import { startIcon, endIcon } from "@rxdrag/react-shared";
import { labelSchema, nameSchema } from "../baseSchema";
import { conditionMaterial } from "./condition";
import { delayMaterial } from "./delay";
import { constValueMaterial } from "./constValue";
import { signalsMaterial } from "./signals";
import { loopMaterial } from "./loop";
import { mergeMaterial } from "./merge";
import { randomMaterial } from "./random";
import { ReactNode } from "react";
import { IActivityMaterial, ActivityType } from "@rxdrag/minions-schema";
import { INodeSchema } from "@rxdrag/schema";

export const startEndSchema: INodeSchema = {
  componentName: "Fragment",
  children: [nameSchema, labelSchema],
}

export const basicReactions: IActivityMaterial<ReactNode>[] = [
  {
    activityName: "start",
    icon: startIcon,
    label: "$input",
    activityType: ActivityType.Start,
    schema: startEndSchema,
  },
  {
    activityName: "end",
    icon: endIcon,
    label: "$output",
    activityType: ActivityType.End,
    schema: startEndSchema,
  },
  conditionMaterial,
  loopMaterial,
  mergeMaterial,
  //switchMaterial,
  delayMaterial,
  randomMaterial,
  signalsMaterial,
  constValueMaterial,
]