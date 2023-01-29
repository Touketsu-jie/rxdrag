import { memo, useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components";
import { Members } from "./components/Members";
import { IControllerMeta, IReactionMeta } from "runner/reaction/interfaces/metas";
import { IEventMeta } from "./interfaces";
import { createUuid } from "./utils";
import { ReactionMetaEditor } from "./components/ReactionMetaEditor";

const SytledContent = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  border: ${props => props.theme.token?.colorBorder} solid 1px;
  .ant-drawer-header{
    padding: 0 16px;
    min-height: 53px;
  }
  .ant-drawer-body{
    padding: 0;
    display: flex;
    flex-flow: column;
    overflow: hidden;
  };
`
const LeftArea = styled.div`
  width: 180px;
  border-right: ${props => props.theme.token?.colorBorder} solid 1px;
  padding: 8px;
  overflow: auto;
`
export const ReactionsEditor = memo((
  props: {
    events: IEventMeta[],
    value?: IControllerMeta,
    onChange?: (value?: IControllerMeta) => void,
  }
) => {
  const { events, value, onChange } = props
  const [inputValue, setInputValue] = useState<IControllerMeta>()
  const [selected, setSelected] = useState<string>()

  const inputValueRef = useRef(inputValue)
  inputValueRef.current = inputValue

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    const eventMetas: IReactionMeta[] = [...(inputValueRef.current?.events || [])]
    for (const event of events) {
      if (!inputValueRef.current?.events?.find(evt => evt.name === event.name)) {
        eventMetas.push({
          id: createUuid(),
          name: event.name,
          label: event.label,
        })
      }
    }
    setInputValue({ ...inputValueRef.current, events: eventMetas })
  }, [events])


  const handleMemberChange = useCallback((meta?: IControllerMeta) => {
    setInputValue(meta)
  }, [])

  return (
    <SytledContent id="reactions-editor-container">
      <LeftArea>
        <Members
          value={inputValue}
          selected={selected}
          onSelect={setSelected}
          onChange={handleMemberChange}
        />
      </LeftArea>
      {
        selected &&
        <ReactionMetaEditor key={selected} />
      }
    </SytledContent>
  )
})