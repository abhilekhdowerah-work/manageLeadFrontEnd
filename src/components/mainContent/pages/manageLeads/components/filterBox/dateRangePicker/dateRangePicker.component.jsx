import { useState } from "react";

import {
    DateRangePicker,
    Group,
    Label,
    Button,
    DateInput,
    DateSegment,
    Popover,
    Dialog,
    RangeCalendar,
    CalendarGrid,
    CalendarCell,
    Heading,
} from "react-aria-components";

import {
    parseDate,
    getLocalTimeZone,
} from "@internationalized/date";

import style from "./dateRangePicker.module.css";

function MyDateRangePicker() {
    const [value, setValue] = useState({
        start: parseDate("2026-05-20"),
        end: parseDate("2026-05-25"),
    });

    return (
        <DateRangePicker
            value={value}
            onChange={setValue}
            className={style.picker}
        >
            <Label className={style.label}>
                Select Date Range
            </Label>

            <Group className={style.group}>
                <DateInput
                    slot="start"
                    className={style.input}
                >
                    {(segment) => (
                        <DateSegment
                            segment={segment}
                            className={style.segment}
                        />
                    )}
                </DateInput>

                <span className={style.separator}>
                    →
                </span>

                <DateInput
                    slot="end"
                    className={style.input}
                >
                    {(segment) => (
                        <DateSegment
                            segment={segment}
                            className={style.segment}
                        />
                    )}
                </DateInput>

                <Button className={style.button}>
                    ⌄
                </Button>
            </Group>

            <div className={style.selectedText}>
                {value?.start?.toDate(getLocalTimeZone()).toDateString()}
                {" - "}
                {value?.end?.toDate(getLocalTimeZone()).toDateString()}
            </div>
            <Popover className={style.popover}>
                <Dialog className={style.dialog}>
                    <RangeCalendar className={style.calendar}>
                        <header className={style.calendarHeader}>
                            <Button slot="previous">
                                ←
                            </Button>

                            <Heading className={style.heading} />

                            <Button slot="next">
                                →
                            </Button>
                        </header>

                        <CalendarGrid className={style.calendarGrid}>
                            {(date) => (
                                <CalendarCell
                                    date={date}
                                    className={({ isSelected, isSelectionStart, isSelectionEnd, isDisabled }) =>
                                        `
                                        ${style.cell}
                                        ${isSelected ? style.selected : ""}
                                        ${isSelectionStart ? style.rangeStart : ""}
                                        ${isSelectionEnd ? style.rangeEnd : ""}
                                        ${isDisabled ? style.disabled : ""}
                                    `
                                    }
                                />
                            )}
                        </CalendarGrid>
                    </RangeCalendar>
                </Dialog>
            </Popover>
        </DateRangePicker>
    );
}

export default MyDateRangePicker;