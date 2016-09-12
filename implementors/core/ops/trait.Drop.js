(function() {var implementors = {};
implementors["scoped_threadpool"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='scoped_threadpool/struct.Pool.html' title='scoped_threadpool::Pool'>Pool</a>","impl&lt;'pool,&nbsp;'scope&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='scoped_threadpool/struct.Scope.html' title='scoped_threadpool::Scope'>Scope</a>&lt;'pool,&nbsp;'scope&gt;",];implementors["lzw"] = ["impl&lt;W:&nbsp;<a class='trait' href='lzw/trait.BitWriter.html' title='lzw::BitWriter'>BitWriter</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='lzw/struct.Encoder.html' title='lzw::Encoder'>Encoder</a>&lt;W&gt;",];implementors["gif"] = ["impl&lt;W:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='gif/struct.Encoder.html' title='gif::Encoder'>Encoder</a>&lt;W&gt;",];implementors["flate2"] = ["impl&lt;W:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='flate2/write/struct.GzEncoder.html' title='flate2::write::GzEncoder'>EncoderWriter</a>&lt;W&gt;",];implementors["rayon"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='rayon/struct.ThreadPool.html' title='rayon::ThreadPool'>ThreadPool</a>","impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='rayon/par_iter/vec/struct.VecIter.html' title='rayon::par_iter::vec::VecIter'>VecIter</a>&lt;T&gt;","impl&lt;'data,&nbsp;T:&nbsp;'data + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='rayon/par_iter/vec/struct.VecProducer.html' title='rayon::par_iter::vec::VecProducer'>VecProducer</a>&lt;'data,&nbsp;T&gt;","impl&lt;'data,&nbsp;T:&nbsp;'data&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='rayon/par_iter/vec/struct.SliceDrain.html' title='rayon::par_iter::vec::SliceDrain'>SliceDrain</a>&lt;'data,&nbsp;T&gt;",];implementors["png"] = ["impl&lt;W:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='png/struct.Writer.html' title='png::Writer'>Writer</a>&lt;W&gt;",];implementors["image"] = ["impl&lt;W&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Drop.html' title='core::ops::Drop'>Drop</a> for <a class='struct' href='gif/encoder/struct.Encoder.html' title='gif::encoder::Encoder'>Encoder</a>&lt;W&gt; <span class='where'>where W: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
