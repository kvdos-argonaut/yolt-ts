import { Option } from 'fp-ts/lib/Option'
import { ReaderTaskEither } from 'fp-ts/lib/ReaderTaskEither'

type YoltErr = string

export type YoltFlag = {
  readonly name: string
  readonly alias: Option<string>
  readonly description: Option<string>
  readonly fallback: Option<unknown>
}

export type YoltCommand = {
  readonly name: string
  readonly version: Option<string>
  readonly about: Option<string>
  readonly examples: readonly string[]
  readonly flags: readonly YoltFlag[]
  readonly subcommands: readonly YoltCommand[]
}

export type YoltCommandTransformer = (s: YoltCommand) => YoltCommand

export type YoltRunner = ReaderTaskEither<YoltCommand, YoltErr, void>
