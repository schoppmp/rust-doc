initSidebarItems({"enum":[["CompareResult","indicates wether a comparison was successful, an error, or if more data was needed"],["ConsumerState","Stores a consumer's current computation state"],["Endianness","Configurable endianness"],["ErrorKind","indicates which parser returned an error"],["FileProducerState",""],["IError","This is the same as IResult, but without Done"],["IResult","Holds the result of parsing functions"],["Input",""],["Move",""],["Needed","Contains information on needed data if a parser returned `Incomplete`"]],"fn":[["add_error_pattern",""],["alpha","Recognizes one or more lowercase and uppercase alphabetic characters: a-zA-Z"],["alphanumeric","Recognizes one or more numerical and alphabetic characters: 0-9a-zA-Z"],["anychar",""],["be_f32","Recognizes big endian 4 bytes floating point number"],["be_f64","Recognizes big endian 8 bytes floating point number"],["be_i16","Recognizes big endian signed 2 bytes integer"],["be_i24","Recognizes big endian signed 3 bytes integer"],["be_i32","Recognizes big endian signed 4 bytes integer"],["be_i64","Recognizes big endian signed 8 bytes integer"],["be_i8","Recognizes a signed 1 byte integer (equivalent to take!(1)"],["be_u16","Recognizes big endian unsigned 2 bytes integer"],["be_u24","Recognizes big endian unsigned 3 byte integer"],["be_u32","Recognizes big endian unsigned 4 bytes integer"],["be_u64","Recognizes big endian unsigned 8 bytes integer"],["be_u8","Recognizes an unsigned 1 byte integer (equivalent to take!(1)"],["begin",""],["code_from_offset",""],["compare_error_paths",""],["crlf",""],["digit","Recognizes one or more numerical characters: 0-9"],["double","Recognizes floating point number in a byte string and returns a f64"],["double_s","Recognizes floating point number in a string and returns a f64"],["eol",""],["error_to_list",""],["error_to_u32",""],["float","Recognizes floating point number in a byte string and returns a f32"],["float_s","Recognizes floating point number in a string and returns a f32"],["generate_colors",""],["hex_digit","Recognizes one or more hexadecimal numerical characters: 0-9, A-F, a-f"],["hex_u32","Recognizes a hex-encoded integer"],["is_alphabetic","Tests if byte is ASCII alphabetic: A-Z, a-z"],["is_alphanumeric","Tests if byte is ASCII alphanumeric: A-Z, a-z, 0-9"],["is_digit","Tests if byte is ASCII digit: 0-9"],["is_hex_digit","Tests if byte is ASCII hex digit: 0-9, A-F, a-f"],["is_oct_digit","Tests if byte is ASCII octal digit: 0-7"],["is_space","Tests if byte is ASCII space or tab"],["le_f32","Recognizes little endian 4 bytes floating point number"],["le_f64","Recognizes little endian 8 bytes floating point number"],["le_i16","Recognizes little endian signed 2 bytes integer"],["le_i24","Recognizes little endian signed 3 bytes integer"],["le_i32","Recognizes little endian signed 4 bytes integer"],["le_i64","Recognizes little endian signed 8 bytes integer"],["le_i8","Recognizes a signed 1 byte integer (equivalent to take!(1)"],["le_u16","Recognizes little endian unsigned 2 bytes integer"],["le_u24","Recognizes little endian unsigned 3 byte integer"],["le_u32","Recognizes little endian unsigned 4 bytes integer"],["le_u64","Recognizes little endian unsigned 8 bytes integer"],["le_u8","Recognizes an unsigned 1 byte integer (equivalent to take!(1)"],["line_ending","Recognizes an end of line (both '\\n' and '\\r\\n')"],["multispace","Recognizes one or more spaces, tabs, carriage returns and line feeds"],["newline","Matches a newline character '\\n'"],["non_empty","Recognizes non empty buffers"],["not_line_ending",""],["oct_digit","Recognizes one or more octal characters: 0-7"],["prepare_errors",""],["print",""],["print_codes",""],["print_error",""],["print_offsets",""],["reset_color",""],["rest","Return the remaining input."],["rest_s","Return the remaining input, for strings."],["shift",""],["sized_buffer",""],["slice_to_offsets",""],["space","Recognizes one or more spaces and tabs"],["tab","Matches a tab character '\\t'"],["tag_cl",""],["write_color",""]],"macro":[["add_return_error","Add an error if the child parser fails"],["alt","Try a list of parsers and return the result of the first successful one"],["alt_complete","Is equivalent to the `alt!` combinator, except that it will not return `Incomplete` when one of the constituting parsers returns `Incomplete`. Instead, it will try the next alternative in the chain."],["apply","emulate function currying: `apply!(my_function, arg1, arg2, ...)` becomes `my_function(input, arg1, arg2, ...)`"],["apply_m","emulate function currying for method calls on structs `apply_m!(self.my_function, arg1, arg2, ...)` becomes `self.my_function(input, arg1, arg2, ...)`"],["bits","`bits!( parser ) => ( &[u8], (&[u8], usize) -> IResult<(&[u8], usize), T> ) -> IResult<&[u8], T>` transforms its byte slice input into a bit stream for the underlying parsers"],["bytes","Counterpart to bits, `bytes!( parser ) => ( (&[u8], usize), &[u8] -> IResult<&[u8], T> ) -> IResult<(&[u8], usize), T>`, transforms its bits stream input into a byte slice for the underlying parsers. If we start in the middle of a byte throws away the bits until the end of the byte."],["call","Used to wrap common expressions and function as macros"],["call_m","Used to called methods then move self back into self"],["char","matches one character: `char!(char) => &[u8] -> IResult<&[u8], char>"],["closure","Wraps a parser in a closure"],["compiler_error",""],["complete","replaces a `Incomplete` returned by the child parser with an `Error`"],["cond","`cond!(bool, I -> IResult<I,O>) => I -> IResult<I, Option<O>>` Conditional combinator"],["cond_reduce","`cond_reduce!(bool, I -> IResult<I,O>) => I -> IResult<I, O>` Conditional combinator with error"],["cond_with_error","`cond_with_error!(bool, I -> IResult<I,O>) => I -> IResult<I, Option<O>>` Conditional combinator"],["consumer_from_parser",""],["count","`count!(I -> IResult<I,O>, nb) => I -> IResult<I, Vec<O>>` Applies the child parser a specified number of times"],["count_fixed","`count_fixed!(O, I -> IResult<I,O>, nb) => I -> IResult<I, [O; nb]>` Applies the child parser a fixed number of times and returns a fixed size array The type must be specified and it must be `Copy`"],["dbg","Prints a message if the parser fails"],["dbg_dmp","Prints a message and the input if the parser fails"],["delimited","`delimited!(I -> IResult<I,T>, I -> IResult<I,O>, I -> IResult<I,U>) => I -> IResult<I, O>` delimited(opening, X, closing) returns X"],["do_parse","`do_parse!(I->IResult<I,A> >> I->IResult<I,B> >> ... I->IResult<I,X> , ( O ) ) => I -> IResult<I, O>` do_parse applies sub parsers in a sequence. it can store intermediary results and make them available for later parsers"],["eat_separator","helper macros to build a separator parser"],["eof","`eof!()` returns its input if it is at the end of input data"],["error_code","creates a parse error from a `nom::ErrorKind`"],["error_node","creates a parse error from a `nom::ErrorKind` and the next error in the parsing tree. if \"verbose-errors\" is not activated, it default to only the error code"],["error_node_position","creates a parse error from a `nom::ErrorKind`, the position in the input and the next error in the parsing tree. if \"verbose-errors\" is not activated, it default to only the error code"],["error_position","creates a parse error from a `nom::ErrorKind` and the position in the input if \"verbose-errors\" is not activated, it default to only the error code"],["escaped","`escaped!(&[T] -> IResult<&[T], &[T]>, T, &[T] -> IResult<&[T], &[T]>) => &[T] -> IResult<&[T], &[T]>` matches a byte string with escaped characters."],["escaped_transform","`escaped_transform!(&[T] -> IResult<&[T], &[T]>, T, &[T] -> IResult<&[T], &[T]>) => &[T] -> IResult<&[T], Vec<T>>` matches a byte string with escaped characters."],["expr_opt","`expr_opt!(Option<O>) => I -> IResult<I, O>` evaluate an expression that returns a Option and returns a IResult::Done(I,T) if Some"],["expr_res","`expr_res!(Result<E,O>) => I -> IResult<I, O>` evaluate an expression that returns a Result<T,E> and returns a IResult::Done(I,T) if Ok"],["fix_error","translate parser result from IResult<I,O,u32> to IResult<I,O,E> with a custom type"],["flat_map","`flat_map!(R -> IResult<R,S>, S -> IResult<S,T>) => R -> IResult<R, T>`"],["fold_many0","`fold_many0!(I -> IResult<I,O>, R, Fn(R, O) -> R) => I -> IResult<I, R>` Applies the parser 0 or more times and folds the list of return values"],["fold_many1","`fold_many1!(I -> IResult<I,O>, R, Fn(R, O) -> R) => I -> IResult<I, R>` Applies the parser 1 or more times and folds the list of return values"],["fold_many_m_n","`fold_many_m_n!(usize, usize, I -> IResult<I,O>, R, Fn(R, O) -> R) => I -> IResult<I, R>` Applies the parser between m and n times (n included) and folds the list of return value"],["i16","if the parameter is nom::Endianness::Big, parse a big endian i16 integer, otherwise a little endian i16 integer"],["i32","if the parameter is nom::Endianness::Big, parse a big endian i32 integer, otherwise a little endian i32 integer"],["i64","if the parameter is nom::Endianness::Big, parse a big endian i64 integer, otherwise a little endian i64 integer"],["is_a","`is_a!(&[T]) => &[T] -> IResult<&[T], &[T]>` returns the longest list of bytes that appear in the provided array"],["is_a_s","`is_a_s!(&str) => &str -> IResult<&str, &str>` returns the longest list of characters that appear in the provided array"],["is_not","`is_not!(&[T:AsBytes]) => &[T] -> IResult<&[T], &[T]>` returns the longest list of bytes that do not appear in the provided array"],["is_not_s","`is_not_s!(&str) => &str -> IResult<&str, &str>` returns the longest list of characters that do not appear in the provided array"],["length_bytes","`length_bytes!(&[T] -> IResult<&[T], nb>) => &[T] -> IResult<&[T], &[T]>` Gets a number from the first parser, then extracts that many bytes from the remaining stream"],["length_count","`length_count!(I -> IResult<I, nb>, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>` gets a number from the first parser, then applies the second parser that many times"],["length_data","`length_data!(I -> IResult<I, nb>) => O`"],["length_value","`length_value!(I -> IResult<I, nb>, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>` gets a number from the first parser, takes a subslice of the input of that size, then applies the second parser on that subslice. If the second parser returns `Incomplete`, `length_value` will return an error"],["many0","`many0!(I -> IResult<I,O>) => I -> IResult<I, Vec<O>>` Applies the parser 0 or more times and returns the list of results in a Vec"],["many1","`many1!(I -> IResult<I,O>) => I -> IResult<I, Vec<O>>` Applies the parser 1 or more times and returns the list of results in a Vec"],["many_m_n","`many_m_n!(usize, usize, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>` Applies the parser between m and n times (n included) and returns the list of results in a Vec"],["many_till","`many_till!(I -> IResult<I,O>, I -> IResult<I,P>) => I -> IResult<I, (Vec<O>, P)>` Applies the first parser until the second applies. Returns a tuple containing the list of results from the first in a Vec and the result of the second."],["map","`map!(I -> IResult<I,O>, O -> P) => I -> IResult<I, P>` maps a function on the result of a parser"],["map_opt","`map_opt!(I -> IResult<I,O>, O -> Option<P>) => I -> IResult<I, P>` maps a function returning an Option on the output of a parser"],["map_res","`map_res!(I -> IResult<I,O>, O -> Result<P>) => I -> IResult<I, P>` maps a function returning a Result on the output of a parser"],["method","Makes a method from a parser combination"],["named","Makes a function from a parser combination"],["named_args","Makes a function from a parser combination with arguments."],["named_attr","Makes a function from a parser combination, with attributes"],["none_of","matches anything but the provided characters"],["not","`not!(I -> IResult<I,O>) => I -> IResult<I, O>` returns a result only if the embedded parser returns Error or Incomplete does not consume the input"],["one_of","matches one of the provided characters"],["opt","`opt!(I -> IResult<I,O>) => I -> IResult<I, Option<O>>` make the underlying parser optional"],["opt_res","`opt_res!(I -> IResult<I,O>) => I -> IResult<I, Result<nom::Err,O>>` make the underlying parser optional"],["pair","`pair!(I -> IResult<I,O>, I -> IResult<I,P>) => I -> IResult<I, (O,P)>` pair(X,Y), returns (x,y)"],["parse_to","`parse_to!(O) => I -> IResult<I, O>` uses the `parse` method from `std::str::FromStr` to convert the current input to the specified type"],["peek","`peek!(I -> IResult<I,O>) => I -> IResult<I, O>` returns a result without consuming the input"],["permutation","`permutation!(I -> IResult<I,A>, I -> IResult<I,B>, ... I -> IResult<I,X> ) => I -> IResult<I, (A,B,...X)>` applies its sub parsers in a sequence, but independent from their order this parser will only succeed if all of its sub parsers succeed"],["preceded","`preceded!(I -> IResult<I,T>, I -> IResult<I,O>) => I -> IResult<I, O>` preceded(opening, X) returns X"],["recognize","`recognize!(I -> IResult<I, O> ) => I -> IResult<I, I>` if the child parser was successful, return the consumed input as produced value"],["return_error","Prevents backtracking if the child parser fails"],["sep","sep is the parser rewriting macro for whitespace separated formats"],["separated_list","`separated_list!(I -> IResult<I,T>, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>` separated_list(sep, X) returns Vec will return Incomplete if there may be more elements"],["separated_list_complete","`separated_list_complete!(I -> IResult<I,T>, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>` This is equivalent to the `separated_list!` combinator, except that it will return `Error` when either the separator or element subparser returns `Incomplete`."],["separated_nonempty_list","`separated_nonempty_list!(I -> IResult<I,T>, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>` separated_nonempty_list(sep, X) returns Vec will return Incomplete if there may be more elements"],["separated_nonempty_list_complete","`separated_nonempty_list_complete!(I -> IResult<I,T>, I -> IResult<I,O>) => I -> IResult<I, Vec<O>>` This is equivalent to the `separated_nonempty_list!` combinator, except that it will return `Error` when either the separator or element subparser returns `Incomplete`."],["separated_pair","`separated_pair!(I -> IResult<I,O>, I -> IResult<I, T>, I -> IResult<I,P>) => I -> IResult<I, (O,P)>` separated_pair(X,sep,Y) returns (x,y)"],["switch","`switch!(I -> IResult<I,P>, P => I -> IResult<I,O> | ... | P => I -> IResult<I,O> ) => I -> IResult<I, O>` choose the next parser depending on the result of the first one, if successful, and returns the result of the second parser"],["tag","`tag!(&[T]: nom::AsBytes) => &[T] -> IResult<&[T], &[T]>` declares a byte array as a suite to recognize"],["tag_bits","matches an integer pattern to a bitstream. The number of bits of the input to compare must be specified"],["tag_no_case","`tag_no_case!(&[T]) => &[T] -> IResult<&[T], &[T]>` declares a case insensitive ascii string as a suite to recognize"],["tag_no_case_s","`tag_no_case_s!(&str) => &str -> IResult<&str, &str>` declares a case-insensitive string as a suite to recognize"],["tag_s","`tag_s!(&str) => &str -> IResult<&str, &str>` declares a string as a suite to recognize"],["take","`take!(nb) => &[T] -> IResult<&[T], &[T]>` generates a parser consuming the specified number of bytes"],["take_bits","`take_bits!(type, nb) => ( (&[T], usize), U, usize) -> IResult<(&[T], usize), U>` generates a parser consuming the specified number of bits."],["take_s","`take_s!(nb) => &str -> IResult<&str, &str>` generates a parser consuming the specified number of characters"],["take_str","`take_str!(nb) => &[T] -> IResult<&[T], &str>` same as take! but returning a &str"],["take_till","`take_till!(T -> bool) => &[T] -> IResult<&[T], &[T]>` returns the longest list of bytes until the provided function succeeds"],["take_till1","`take_till1!(T -> bool) => &[T] -> IResult<&[T], &[T]>` returns the longest non empty list of bytes until the provided function succeeds"],["take_till1_s","`take_till1_s!(char -> bool) => &str -> IResult<&str, &str>` returns the longest non empty list of characters until the provided function succeeds"],["take_till_s","`take_till_s!(char -> bool) => &str -> IResult<&str, &str>` returns the longest list of characters until the provided function succeeds"],["take_until","`take_until!(tag) => &[T] -> IResult<&[T], &[T]>` consumes data until it finds the specified tag"],["take_until1","`take_until1!(tag) => &[T] -> IResult<&[T], &[T]>` consumes data until it finds the specified tag"],["take_until_and_consume","`take_until_and_consume!(tag) => &[T] -> IResult<&[T], &[T]>` generates a parser consuming bytes until the specified byte sequence is found, and consumes it"],["take_until_and_consume1","`take_until_and_consume1!(tag) => &[T] -> IResult<&[T], &[T]>` generates a parser consuming bytes (at least 1) until the specified byte sequence is found, and consumes it"],["take_until_and_consume_s","`take_until_and_consume_s!(&str) => &str -> IResult<&str, &str>` generates a parser consuming all chars until the specified string is found and consumes it"],["take_until_either","`take_until_either!(tag) => &[T] -> IResult<&[T], &[T]>`"],["take_until_either_and_consume","`take_until_either_and_consume!(tag) => &[T] -> IResult<&[T], &[T]>` consumes data until it finds any of the specified characters, and consume it"],["take_until_s","`take_until_s!(&str) => &str -> IResult<&str, &str>` generates a parser consuming all chars until the specified string is found and leaves it in the remaining input"],["take_while","`take_while!(T -> bool) => &[T] -> IResult<&[T], &[T]>` returns the longest list of bytes until the provided function fails."],["take_while1","`take_while1!(T -> bool) => &[T] -> IResult<&[T], &[T]>` returns the longest (non empty) list of bytes until the provided function fails."],["take_while1_s","`take_while1_s!(char -> bool) => &str -> IResult<&str, &str>` returns the longest (non empty) list of characters until the provided function fails."],["take_while_s","`take_while_s!(char -> bool) => &str -> IResult<&str, &str>` returns the longest list of characters until the provided function fails."],["tap","`tap!(name: I -> IResult<I,O> => { block }) => I -> IResult<I, O>` allows access to the parser's result without affecting it"],["terminated","`terminated!(I -> IResult<I,O>, I -> IResult<I,T>) => I -> IResult<I, O>` terminated(X, closing) returns X"],["try_parse","A bit like `std::try!`, this macro will return the remaining input and parsed value if the child parser returned `Done`, and will do an early return for `Error` and `Incomplete` this can provide more flexibility than `do_parse!` if needed"],["tuple","`tuple!(I->IResult<I,A>, I->IResult<I,B>, ... I->IResult<I,X>) => I -> IResult<I, (A, B, ..., X)>` chains parsers and assemble the sub results in a tuple."],["u16","if the parameter is nom::Endianness::Big, parse a big endian u16 integer, otherwise a little endian u16 integer"],["u32","if the parameter is nom::Endianness::Big, parse a big endian u32 integer, otherwise a little endian u32 integer"],["u64","if the parameter is nom::Endianness::Big, parse a big endian u64 integer, otherwise a little endian u64 integer"],["value","`value!(T, R -> IResult<R, S> ) => R -> IResult<R, T>`"],["verify","`verify!(I -> IResult<I,O>, O -> bool) => I -> IResult<I, O>` returns the result of the child parser if it satisfies a verification function"],["wrap_sep",""],["ws","`ws!(I -> IResult<I,O>) => I -> IResult<I, O>`"]],"mod":[["bits","Bit level parsers and combinators"],["methods","Method macro combinators"],["verbose_errors","Error management"],["whitespace","Support for whitespace delimited formats"]],"struct":[["ChainConsumer","ChainConsumer takes a consumer C1 R -> S, and a consumer C2 S -> T, and makes a consumer R -> T by applying C2 on C1's result"],["FileProducer",""],["MapConsumer","MapConsumer takes a function S -> T and applies it on a consumer producing values of type S"],["MemProducer","A MemProducer generates values from an in memory byte buffer"],["ProducerRepeat","ProducerRepeat takes a single value, and generates it at each step"]],"trait":[["AsBytes",""],["AsChar","transforms common types to a char for basic token parsing"],["Compare","abstracts comparison operations"],["Consumer","The Consumer trait wraps a computation and its state"],["FindSubstring","look for a substring in self"],["FindToken","look for self in the given input stream"],["GetInput",""],["GetOutput",""],["HexDisplay",""],["InputIter","abstracts common iteration operations on the input type"],["InputLength","abstract method to calculate the input length"],["InputTake","abstracts slicing operations"],["Offset","useful functions to calculate the offset between slices and show a hexdump of a slice"],["ParseTo","used to integrate str's parse() method"],["Producer","The producer wraps a data source, like file or network, and applies a consumer on it"],["Slice","slicing operations using ranges"]]});