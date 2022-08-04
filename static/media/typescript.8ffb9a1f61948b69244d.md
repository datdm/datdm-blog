# Config Typescript ReactJS

<a name="readme-top"></a>
Tutorial config Typescript.

### Export typescript

```javascript
export { default as Table } from "components";
export { default as DialogComponnet } from "components";

export * from "components";
export { LoadingPage } from "components";

export type { DialogType } from "components";
export type { SearchTableType } from "components";

export default DialogType;
export default SearchTableType;

export { DialogType , SearchTableType } = const;
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Import typescript

```javascript
import { ReactComponent as ReactHookFormSvg } from "assets/icons/react-hook-form.svg";

import Default from "components";
import { const } from "components";
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
