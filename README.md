# local-store-helper

**local-store-helper** is a simple utility for managing `localStorage` in React, Next.js, and JavaScript projects. This package provides functions to set, get, update, remove, and clear data stored in `localStorage`.

## Features

- **Set** data in `localStorage`
- **Update** existing data in `localStorage`
- **Get** data from `localStorage`
- **Remove** specific items from `localStorage`
- **Clear** all items from `localStorage`
- Works with **React**, **Next.js**, and **vanilla JavaScript**.

## Installation

#### You can install the `local-store-helper` package using npm:

```bash
npm install local-store-helper
```

#### Once installed, you can import the functions into your project like so:

```js
import { stgManager, getStg, clearStg } from "local-store-helper";
```

<!-- usage -->

## Usage

<!-- ---------------1---------------- -->

### 1. Set Data in localStorage

### To set data in localStorage, use the stgManager function with the 'set' action.

```js
import { stgManager } from "local-store-helper";

const saveSession = () => {
  stgManager("set", "userSession", { userId: 123, username: "john_doe" });
};
```

<!-- ---------------2---------------- -->

### 2. Update Data in localStorage

### You can update existing data by calling stgManager with the 'update' action.

```js
import { stgManager } from "local-store-helper";

const updateSession = () => {
  stgManager("update", "userSession", {
    userId: 123,
    username: "john_updated",
  });
};
```

<!-- ---------------3---------------- -->

### 3. Remove Data from localStorage

### To remove a specific item, call stgManager with the 'remove' action.

```js
import { stgManager } from "local-store-helper";

const removeSession = () => {
  stgManager("remove", "userSession");
};
```

<!-- ---------------4---------------- -->

### 4. Get Data from localStorage

### To retrieve data, use the getStg function. It will return the stored value or null if the item is not found.

```js
import { getStg } from "local-store-helper";

const userSession = getStg("userSession");
console.log(userSession); // Logs the stored value or null if not found
```

<!-- ---------------5---------------- -->

### 5. Clear All Items in localStorage

### To clear all stored items in localStorage, use the clearStg function.

```js
import { clearStg } from "local-store-helper";

const clearAll = () => {
  clearStg();
};
```

## API Reference

```js
stgManager(action: 'set' | 'remove' | 'update', key: string, value?: T): void
```

- action: Specifies the action to perform. Can be `set`, `remove`, or `update`.
- key: The key under which the data is stored in localStorage.
- value: The value to store (only for `set` and `update` actions).

```js
getStg(key: string): T | null
```

- key: The key for the stored data.
- Returns the stored value or null if the item is not found.

```js
clearStg(): void
```

- Clears all items stored in localStorage.
