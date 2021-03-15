cat << "EOF"


╔═══════════════════════════════════════════════════════════════════════════╗
	╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╭╮╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━━╮╱╱╱╱╱╭╮╱╱╱╭╮╭╮
	┃╭━╮┃╱╱╱╱╭╮╱╱╱╱╭╯╰╮┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰┫┣╯╱╱╱╱╭╯╰╮╱╱┃┃┃┃
	┃╰━╯┣━┳━━╋╋━━┳━┻╮╭╯┃┃╱┃┣━━┳━━┳━━┳╮╭┳━━╮╱┃┃╭━╮╭━┻╮╭╋━━┫┃┃┃╭━━┳━╮
	┃╭━━┫╭┫╭╮┣┫┃━┫╭━┫┃╱┃┃╱┃┃╭╮┃╭╮┃╭╮┃┃┃┃┃━┫╱┃┃┃╭╮┫━━┫┃┃╭╮┃┃┃┃┃┃━┫╭╯
	┃┃╱╱┃┃┃╰╯┃┃┃━┫╰━┫╰╮┃╰━╯┃╰╯┃╭╮┃╰╯┃╰╯┃┃━┫╭┫┣┫┃┃┣━━┃╰┫╭╮┃╰┫╰┫┃━┫┃
	╰╯╱╱╰╯╰━━┫┣━━┻━━┻━╯╰━━━┫╭━┻╯╰┻━╮┣━━┻━━╯╰━━┻╯╰┻━━┻━┻╯╰┻━┻━┻━━┻╯
	╱╱╱╱╱╱╱╱╭╯┃╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱┃┃
	╱╱╱╱╱╱╱╱╰━╯╱╱╱╱╱╱╱╱╱╱╱╱╰╯╱╱╱╱╱╱╰╯
╚═══════════════════════════════════════════════════════════════════════════╝
EOF

echo "┍━━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━━┑"
echo "   select the operation"
echo "  1) Dependancy manager"
echo "  2)  System commands"
echo "  3)Software Management"
echo "  4)    Port manager" 
echo "┕━━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━━┙"

read n
case $n in
  1)
echo "┍━━━━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━━━━┑"
echo "     select the operation"
echo "  1)Install apt dependancies"
echo "  2)Install npm dependancies"
echo "┕━━━━━━━━━━━ ⋆⋅☆⋅⋆ ━━━━━━━━━━━┙"
read m
case $m in
1) echo "Installing"
apt list --installed 2>/dev/null | grep 'dialog' || apt install 'dialog'

esac;;
  2) echo "Coming soon";;
  3) echo "coming soon";;
  4) echo "Coming soon";;
  *) echo "invalid option";;
esac