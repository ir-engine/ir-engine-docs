rg -l draft: ./docs | while read -r old ; do
  new=`echo $old | sed -re's/^(.+)\/([^\/]+)$/\1\/d_\2/'`
  mv $old $new
done