import "@total-typescript/ts-reset"
import "typed-query-selector/strict"

declare module "*.css" {
  const content: string
  export default content
}
