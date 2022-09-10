import { Switch } from "@headlessui/react";
import React from "react";

const SwitchItem = ({ label, condition, toggleCondition }) => {
  return (
    <Switch.Group as="div" className="flex items-center w-full">
      <Switch.Label as="span" className="flex-auto font-medium text-gray-600">
        {label}
      </Switch.Label>
      <Switch
        checked={condition}
        onChange={toggleCondition}
        className={`${
          condition ? "bg-black" : "bg-gray-200"
        } "relative inline-flex items-center h-6 w-11 rounded-full cursor-pointer ease-in-out duration-200 focus:outline-none"`}
      >
        <span
          aria-hidden="true"
          className={`${
            condition ? "translate-x-6" : "translate-x-1"
          } "pointer-events-none inline-block h-4 w-4 ring-0 rounded-full bg-white transform transition ease-in-out duration-200"`}
        />
      </Switch>
    </Switch.Group>
  );
};

export default SwitchItem;
