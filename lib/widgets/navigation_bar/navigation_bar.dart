import 'package:flutter/material.dart';

class NavigationBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Container(
            margin: EdgeInsets.only(left: 20.0),
            height: 30,
            width: 30,
            decoration: BoxDecoration(
                shape: BoxShape.circle,
                image: new DecorationImage(
                  fit: BoxFit.fill,
                  image: AssetImage('assets/images/logo.png'),
                )),
          ),
          Text(
            'Be Water Theater',
            style: TextStyle(
              color: Colors.white,
              fontFamily: 'Meadow',
              fontSize: 40,
              fontWeight: FontWeight.w300,
            ),
          ),

          Container(
            margin: EdgeInsets.only(right: 20.0),
            child: PopupMenuButton(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10)),
              offset: Offset(1000, kToolbarHeight),
              color: Color.fromRGBO(0, 0, 0, 0.6),
              icon: Icon(Icons.menu_rounded, color: Colors.white),
              iconSize: 30,
              itemBuilder: (BuildContext context) => <PopupMenuEntry>[
                PopupMenuItem(
                  child: Text(
                    'Episode',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
                PopupMenuItem(
                  child: Text(
                    'Abount',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              ],
            ),
          )

          
        ],
      ),
    );
  }
}
