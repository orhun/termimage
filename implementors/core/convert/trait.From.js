(function() {var implementors = {};
implementors["ansi_term"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"ansi_term/enum.Colour.html\" title=\"enum ansi_term::Colour\">Colour</a>&gt; for <a class=\"struct\" href=\"ansi_term/struct.Style.html\" title=\"struct ansi_term::Style\">Style</a>","synthetic":false,"types":["ansi_term::style::Style"]},{"text":"impl&lt;'a, I, S:&nbsp;'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"ansi_term/struct.ANSIGenericString.html\" title=\"struct ansi_term::ANSIGenericString\">ANSIGenericString</a>&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, S&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/trait.ToOwned.html#associatedtype.Owned\" title=\"type alloc::borrow::ToOwned::Owned\">Owned</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["ansi_term::display::ANSIGenericString"]}];
implementors["clap"] = [{"text":"impl&lt;'a, 'b, 'z&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'z <a class=\"struct\" href=\"clap/struct.Arg.html\" title=\"struct clap::Arg\">Arg</a>&lt;'a, 'b&gt;&gt; for <a class=\"struct\" href=\"clap/struct.Arg.html\" title=\"struct clap::Arg\">Arg</a>&lt;'a, 'b&gt;","synthetic":false,"types":["clap::args::arg::Arg"]},{"text":"impl&lt;'a, 'z&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'z <a class=\"struct\" href=\"clap/struct.ArgGroup.html\" title=\"struct clap::ArgGroup\">ArgGroup</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"clap/struct.ArgGroup.html\" title=\"struct clap::ArgGroup\">ArgGroup</a>&lt;'a&gt;","synthetic":false,"types":["clap::args::group::ArgGroup"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"clap/struct.Error.html\" title=\"struct clap::Error\">Error</a>","synthetic":false,"types":["clap::errors::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt; for <a class=\"struct\" href=\"clap/struct.Error.html\" title=\"struct clap::Error\">Error</a>","synthetic":false,"types":["clap::errors::Error"]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Atomic.html\" title=\"struct crossbeam_epoch::Atomic\">Atomic</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Atomic"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Atomic.html\" title=\"struct crossbeam_epoch::Atomic\">Atomic</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Atomic"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Atomic.html\" title=\"struct crossbeam_epoch::Atomic\">Atomic</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Atomic"]},{"text":"impl&lt;'g, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"crossbeam_epoch/struct.Shared.html\" title=\"struct crossbeam_epoch::Shared\">Shared</a>&lt;'g, T&gt;&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Atomic.html\" title=\"struct crossbeam_epoch::Atomic\">Atomic</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Atomic"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const T</a>&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Atomic.html\" title=\"struct crossbeam_epoch::Atomic\">Atomic</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Atomic"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Owned"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Owned"]},{"text":"impl&lt;'g, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const T</a>&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Shared.html\" title=\"struct crossbeam_epoch::Shared\">Shared</a>&lt;'g, T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Shared"]}];
implementors["crossbeam_utils"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_utils/struct.CachePadded.html\" title=\"struct crossbeam_utils::CachePadded\">CachePadded</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_utils::cache_padded::CachePadded"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_utils/sync/struct.ShardedLock.html\" title=\"struct crossbeam_utils::sync::ShardedLock\">ShardedLock</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_utils::sync::sharded_lock::ShardedLock"]}];
implementors["deflate"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"deflate/enum.Compression.html\" title=\"enum deflate::Compression\">Compression</a>&gt; for <a class=\"struct\" href=\"deflate/struct.CompressionOptions.html\" title=\"struct deflate::CompressionOptions\">CompressionOptions</a>","synthetic":false,"types":["deflate::compression_options::CompressionOptions"]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, L&gt;&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;","synthetic":false,"types":["either::Either"]}];
implementors["gif"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"gif/enum.DecodingError.html\" title=\"enum gif::DecodingError\">DecodingError</a>","synthetic":false,"types":["gif::reader::decoder::DecodingError"]}];
implementors["image"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"image/error/enum.ImageError.html\" title=\"enum image::error::ImageError\">ImageError</a>","synthetic":false,"types":["image::error::ImageError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"image/enum.ImageFormat.html\" title=\"enum image::ImageFormat\">ImageFormat</a>&gt; for <a class=\"enum\" href=\"image/error/enum.ImageFormatHint.html\" title=\"enum image::error::ImageFormatHint\">ImageFormatHint</a>","synthetic":false,"types":["image::error::ImageFormatHint"]},{"text":"impl&lt;'_&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"enum\" href=\"image/error/enum.ImageFormatHint.html\" title=\"enum image::error::ImageFormatHint\">ImageFormatHint</a>","synthetic":false,"types":["image::error::ImageFormatHint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"image/error/enum.ImageFormatHint.html\" title=\"enum image::error::ImageFormatHint\">ImageFormatHint</a>&gt; for <a class=\"struct\" href=\"image/error/struct.UnsupportedError.html\" title=\"struct image::error::UnsupportedError\">UnsupportedError</a>","synthetic":false,"types":["image::error::UnsupportedError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"image/flat/enum.Error.html\" title=\"enum image::flat::Error\">Error</a>&gt; for <a class=\"enum\" href=\"image/error/enum.ImageError.html\" title=\"enum image::error::ImageError\">ImageError</a>","synthetic":false,"types":["image::error::ImageError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"image/pnm/struct.BitmapHeader.html\" title=\"struct image::pnm::BitmapHeader\">BitmapHeader</a>&gt; for <a class=\"struct\" href=\"image/pnm/struct.PNMHeader.html\" title=\"struct image::pnm::PNMHeader\">PNMHeader</a>","synthetic":false,"types":["image::pnm::header::PNMHeader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"image/pnm/struct.GraymapHeader.html\" title=\"struct image::pnm::GraymapHeader\">GraymapHeader</a>&gt; for <a class=\"struct\" href=\"image/pnm/struct.PNMHeader.html\" title=\"struct image::pnm::PNMHeader\">PNMHeader</a>","synthetic":false,"types":["image::pnm::header::PNMHeader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"image/pnm/struct.PixmapHeader.html\" title=\"struct image::pnm::PixmapHeader\">PixmapHeader</a>&gt; for <a class=\"struct\" href=\"image/pnm/struct.PNMHeader.html\" title=\"struct image::pnm::PNMHeader\">PNMHeader</a>","synthetic":false,"types":["image::pnm::header::PNMHeader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"image/pnm/struct.ArbitraryHeader.html\" title=\"struct image::pnm::ArbitraryHeader\">ArbitraryHeader</a>&gt; for <a class=\"struct\" href=\"image/pnm/struct.PNMHeader.html\" title=\"struct image::pnm::PNMHeader\">PNMHeader</a>","synthetic":false,"types":["image::pnm::header::PNMHeader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"image/struct.Delay.html\" title=\"struct image::Delay\">Delay</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>","synthetic":false,"types":["core::time::Duration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"image/enum.ColorType.html\" title=\"enum image::ColorType\">ColorType</a>&gt; for <a class=\"enum\" href=\"image/enum.ExtendedColorType.html\" title=\"enum image::ExtendedColorType\">ExtendedColorType</a>","synthetic":false,"types":["image::color::ExtendedColorType"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"image/trait.Primitive.html\" title=\"trait image::Primitive\">Primitive</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"image/struct.Rgb.html\" title=\"struct image::Rgb\">Rgb</a>&lt;T&gt;","synthetic":false,"types":["image::color::Rgb"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"image/trait.Primitive.html\" title=\"trait image::Primitive\">Primitive</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"image/struct.Bgr.html\" title=\"struct image::Bgr\">Bgr</a>&lt;T&gt;","synthetic":false,"types":["image::color::Bgr"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"image/trait.Primitive.html\" title=\"trait image::Primitive\">Primitive</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 1]</a>&gt; for <a class=\"struct\" href=\"image/struct.Luma.html\" title=\"struct image::Luma\">Luma</a>&lt;T&gt;","synthetic":false,"types":["image::color::Luma"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"image/trait.Primitive.html\" title=\"trait image::Primitive\">Primitive</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 4]</a>&gt; for <a class=\"struct\" href=\"image/struct.Rgba.html\" title=\"struct image::Rgba\">Rgba</a>&lt;T&gt;","synthetic":false,"types":["image::color::Rgba"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"image/trait.Primitive.html\" title=\"trait image::Primitive\">Primitive</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 4]</a>&gt; for <a class=\"struct\" href=\"image/struct.Bgra.html\" title=\"struct image::Bgra\">Bgra</a>&lt;T&gt;","synthetic":false,"types":["image::color::Bgra"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"image/trait.Primitive.html\" title=\"trait image::Primitive\">Primitive</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 2]</a>&gt; for <a class=\"struct\" href=\"image/struct.LumaA.html\" title=\"struct image::LumaA\">LumaA</a>&lt;T&gt;","synthetic":false,"types":["image::color::LumaA"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"image/enum.ImageFormat.html\" title=\"enum image::ImageFormat\">ImageFormat</a>&gt; for <a class=\"enum\" href=\"image/enum.ImageOutputFormat.html\" title=\"enum image::ImageOutputFormat\">ImageOutputFormat</a>","synthetic":false,"types":["image::image::ImageOutputFormat"]}];
implementors["jpeg_decoder"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"jpeg_decoder/enum.Error.html\" title=\"enum jpeg_decoder::Error\">Error</a>","synthetic":false,"types":["jpeg_decoder::error::Error"]}];
implementors["miniz_oxide"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"miniz_oxide/enum.MZFlush.html\" title=\"enum miniz_oxide::MZFlush\">MZFlush</a>&gt; for <a class=\"enum\" href=\"miniz_oxide/deflate/core/enum.TDEFLFlush.html\" title=\"enum miniz_oxide::deflate::core::TDEFLFlush\">TDEFLFlush</a>","synthetic":false,"types":["miniz_oxide::deflate::core::TDEFLFlush"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"miniz_oxide/struct.StreamResult.html\" title=\"struct miniz_oxide::StreamResult\">StreamResult</a>&gt; for <a class=\"type\" href=\"miniz_oxide/type.MZResult.html\" title=\"type miniz_oxide::MZResult\">MZResult</a>","synthetic":false,"types":["miniz_oxide::MZResult"]},{"text":"impl&lt;'_&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"miniz_oxide/struct.StreamResult.html\" title=\"struct miniz_oxide::StreamResult\">StreamResult</a>&gt; for <a class=\"type\" href=\"miniz_oxide/type.MZResult.html\" title=\"type miniz_oxide::MZResult\">MZResult</a>","synthetic":false,"types":["miniz_oxide::MZResult"]}];
implementors["num_rational"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a>,&nbsp;</span>","synthetic":false,"types":["num_rational::Ratio"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a>,&nbsp;</span>","synthetic":false,"types":["num_rational::Ratio"]}];
implementors["png"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"png/enum.DecodingError.html\" title=\"enum png::DecodingError\">DecodingError</a>","synthetic":false,"types":["png::decoder::stream::DecodingError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"png/enum.DecodingError.html\" title=\"enum png::DecodingError\">DecodingError</a>","synthetic":false,"types":["png::decoder::stream::DecodingError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"png/enum.DecodingError.html\" title=\"enum png::DecodingError\">DecodingError</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>","synthetic":false,"types":["std::io::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"png/enum.EncodingError.html\" title=\"enum png::EncodingError\">EncodingError</a>","synthetic":false,"types":["png::encoder::EncodingError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"png/enum.EncodingError.html\" title=\"enum png::EncodingError\">EncodingError</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>","synthetic":false,"types":["std::io::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"deflate/compression_options/enum.Compression.html\" title=\"enum deflate::compression_options::Compression\">Compression</a>&gt; for <a class=\"enum\" href=\"png/enum.Compression.html\" title=\"enum png::Compression\">Compression</a>","synthetic":false,"types":["png::common::Compression"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"png/enum.Compression.html\" title=\"enum png::Compression\">Compression</a>&gt; for <a class=\"struct\" href=\"deflate/compression_options/struct.CompressionOptions.html\" title=\"struct deflate::compression_options::CompressionOptions\">CompressionOptions</a>","synthetic":false,"types":["deflate::compression_options::CompressionOptions"]}];
implementors["regex"] = [{"text":"impl&lt;'t&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"regex/bytes/struct.Match.html\" title=\"struct regex::bytes::Match\">Match</a>&lt;'t&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;","synthetic":false,"types":["core::ops::range::Range"]},{"text":"impl&lt;'t&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"regex/struct.Match.html\" title=\"struct regex::Match\">Match</a>&lt;'t&gt;&gt; for &amp;'t <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>","synthetic":false,"types":[]},{"text":"impl&lt;'t&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"regex/struct.Match.html\" title=\"struct regex::Match\">Match</a>&lt;'t&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;","synthetic":false,"types":["core::ops::range::Range"]}];
implementors["regex_syntax"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"regex_syntax/ast/struct.Error.html\" title=\"struct regex_syntax::ast::Error\">Error</a>&gt; for <a class=\"enum\" href=\"regex_syntax/enum.Error.html\" title=\"enum regex_syntax::Error\">Error</a>","synthetic":false,"types":["regex_syntax::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"regex_syntax/hir/struct.Error.html\" title=\"struct regex_syntax::hir::Error\">Error</a>&gt; for <a class=\"enum\" href=\"regex_syntax/enum.Error.html\" title=\"enum regex_syntax::Error\">Error</a>","synthetic":false,"types":["regex_syntax::error::Error"]}];
implementors["tiff"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"tiff/enum.TiffError.html\" title=\"enum tiff::TiffError\">TiffError</a>","synthetic":false,"types":["tiff::error::TiffError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>&gt; for <a class=\"enum\" href=\"tiff/enum.TiffError.html\" title=\"enum tiff::TiffError\">TiffError</a>","synthetic":false,"types":["tiff::error::TiffError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()